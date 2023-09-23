import prismadb from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";


// Define a function to calculate points for a single event
async function calculateEventPoints(eventId: string, userId: string): Promise<number> {
  // Retrieve the top 3 times for the specified event
  const eventTimes = await prismadb.time.findMany({
    where: {
      leaderboard: {
        eventId,
      },
    },
    orderBy: {
      time: 'asc',
    },
    take: 3,
  });

  // Find the user's position in the top 3 times
  const userIndex = eventTimes.findIndex((time) => time.userId === userId);

  // Calculate user points based on their position in the top 3 times
  let userPoints = 0;
  if (userIndex >= 0 && userIndex < 3) {
    // User is within the top 3
    userPoints = 3 - userIndex; // 1st place gets 3 points, 2nd place gets 2 points, 3rd place gets 1 point
  }

  return userPoints;
}

// Define a function to get total points from all events
export default async function getTotalPoints() {
  const currentUser = await getCurrentUser();

  try {
    if (!currentUser?.id) {
      throw new Error('No user authenticated');
    }

    // Retrieve all events
    const events = await prismadb.event.findMany();

    // Calculate points for each event and sum them up
    let totalPoints = 0;
    for (const event of events) {
      const eventPoints = await calculateEventPoints(event.id, currentUser.id);
      totalPoints += eventPoints;
    }

    return totalPoints;
  } catch (error: any) {
    throw new Error(error);
  }
}

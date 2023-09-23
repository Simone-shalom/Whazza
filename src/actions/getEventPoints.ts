import prismadb from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

interface IEventPoints {
  leaderboardId?: string;
}

export default async function getEventPoints(params: IEventPoints) {
  const currentUser = await getCurrentUser();
  const { leaderboardId } = params;

  try {
    if (!currentUser?.id) {
      throw new Error('No user authenticated');
    }

    if (!leaderboardId) {
      throw new Error('Leaderboard ID is required');
    }

    // Retrieve the top 3 times for the specified leaderboard
    const leaderboardTimes = await prismadb.time.findMany({
      where: {
        leaderboardId,
      },
      orderBy: {
        time: 'asc',
      },
      take: 3,
    });

    // Find the user's position in the top 3 times
    const userIndex = leaderboardTimes.findIndex(
      (time) => time.userId === currentUser.id
    );

    // Calculate user points based on their position in the top 3 times
    let userPoints = 0;
    if (userIndex >= 0 && userIndex < 3) {
      // User is within the top 3
      userPoints = 3 - userIndex; // 1st place gets 3 points, 2nd place gets 2 points, 3rd place gets 1 point
    }

    return userPoints;
  } catch (error: any) {
    throw new Error(error);
  }
}

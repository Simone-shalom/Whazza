import prismadb from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getUserPoints() {
  const currentUser = await getCurrentUser();

  try {
    if (!currentUser?.id) {
      throw new Error('No user authenticated');
    }

    // Retrieve the top 3 times for the user
    const userTimes = await prismadb.time.findMany({
      where: {
        userId: currentUser.id,
      },
      orderBy: {
        time: 'asc',
      },
      take: 3,
    });

    // Calculate user points based on their position in the top 3 times
    let userPoints = 0;
    userTimes.forEach((time, index) => {
      // Calculate points for 1st, 2nd, and 3rd positions
      if (index === 0) {
        userPoints += 3; // 1st place gets 3 points
      } else if (index === 1) {
        userPoints += 2; // 2nd place gets 2 points
      } else if (index === 2) {
        userPoints += 1; // 3rd place gets 1 point
      }
    });

    return userPoints;
  } catch (error: any) {
    throw new Error(error);
  }
}

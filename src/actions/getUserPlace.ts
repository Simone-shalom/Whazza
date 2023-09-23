import prismadb from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getUserPlaceInLeaderboard(leaderboardId: string): Promise<number | null> {
  const currentUser = await getCurrentUser();

  try {
    if (!currentUser?.id) {
      throw new Error('No user authenticated');
    }

    // Retrieve all times for the specified leaderboard
    const allLeaderboardTimes = await prismadb.time.findMany({
      where: {
        leaderboardId: leaderboardId,
      },
      orderBy: {
        time: 'asc',
      },
    });

    // Sort all leaderboard times by time (ascending)
    allLeaderboardTimes.sort((a, b) => {
      if (!a.time) return 1;
      if (!b.time) return -1;
      return a.time.localeCompare(b.time);
    });

    // Find the user's position (place) in the leaderboard
    const userPlace = allLeaderboardTimes.findIndex((time) => time.userId === currentUser.id);

    // Adding 1 because userPlace is zero-based, and return null if the user is not in the leaderboard
    return userPlace >= 0 ? userPlace + 1 : null;
  } catch (error: any) {
    throw new Error(error);
  }
}

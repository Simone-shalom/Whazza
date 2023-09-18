import prismadb from "@/lib/prismadb";

interface ITopThreeTimesParams {
  topCount: number;
}

export default async function getTopThreeTimes(params: ITopThreeTimesParams) {
  const { topCount } = params;

  try {
    if (!topCount || topCount <= 0) {
      return [];
    }

    // Retrieve all events
    const allEvents = await prismadb.event.findMany();

    // Retrieve the top 3 times for each event
    const topThreeTimes = await Promise.all(
      allEvents.map(async (event) => {
        // Find the associated leaderboard for the event, if it exists
        const leaderboard = await prismadb.leaderboard.findFirst({
          where: {
            eventId: event.id,
          },
        });

        if (!leaderboard) {
          // Event has no associated leaderboard
          return null;
        }

        // Retrieve the top N times (in this case, top 3) for the leaderboard
        const times = await prismadb.time.findMany({
          where: {
            leaderboardId: leaderboard.id,
          },
          orderBy: {
            time: 'asc', // Add your desired ordering criteria here
          },
          take: topCount,
        });

        return {
          eventId: event.id,
          times,
        };
      })
    );

    // Filter out events with no associated leaderboard
    const filteredTopThreeTimes = topThreeTimes.filter((item) => item !== null);

    return filteredTopThreeTimes;
  } catch (error: any) {
    throw new Error(error);
  }
}

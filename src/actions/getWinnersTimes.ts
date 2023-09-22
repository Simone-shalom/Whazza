import prismadb from "@/lib/prismadb"
import getCurrentUser from "./getCurrentUser"

interface ITimesParams {
    leaderboardId?: string
}

export default async function getWinnerTimes (params: ITimesParams) {


    const {leaderboardId}= params
    const currentUser = await getCurrentUser()

    try {

        const winnerTimes = await prismadb.time.findMany({
            where: {
                leaderboardId: leaderboardId
            },
            orderBy: {
                time: 'asc'
            },
            take: 3
        })

         // Check if the userId parameter is provided
        if (currentUser) {
        // Find if the current user's ID exists in the winnerTimes
        const userHasWinnerTime = winnerTimes.some(
          (time) => time.userId === currentUser.id
        );
  
        return {
          winnerTimes,
          userHasWinnerTime,
        };
      }


        return winnerTimes

    }catch(error: any){
        throw new Error(error)
    }

}
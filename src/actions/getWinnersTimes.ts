import prismadb from "@/lib/prismadb"


interface IWinnerTimesParams {
    leaderboardId?: string
}

export default async function getWinnerTimes (params: IWinnerTimesParams) {


    const {leaderboardId}= params

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


        return winnerTimes

    }catch(error: any){
        throw new Error(error)
    }

}
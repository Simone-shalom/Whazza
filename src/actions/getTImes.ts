import prismadb from "@/lib/prismadb"


interface ITimesParams {
    leaderboardId?: string
}

export default async function getTimes (params: ITimesParams) {


    const {leaderboardId}= params

    try {

        const times = await prismadb.time.findMany({
            where: {
                leaderboardId: leaderboardId
            },
        })


        return times

    }catch(error: any){
        throw new Error(error)
    }

}
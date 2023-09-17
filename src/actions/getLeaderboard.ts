import prismadb from "@/lib/prismadb";


interface IleaderboardParams {
    eventId?: string
}

export default async function getLeaderboard(params: IleaderboardParams){

    try {

        const {eventId} = params

        if(!eventId){
            throw new Error("Event ID not specified")
        }

        const leaderboard = await prismadb.leaderboard.findMany({
            where : {
                eventId: eventId,
            },
            include: {
                times: true
            }
        })

        return leaderboard[0]

    }catch(error){
        throw new Error('Leaderboard, action')
    }
}
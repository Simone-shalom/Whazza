import prismadb from "@/lib/prismadb"

export default async function getEventParticipants(){

    try {

        const events = await prismadb.event.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                leaderboard: true
            }
        })

        return events

    }catch(error: any){
        throw new Error(error)
    }



}
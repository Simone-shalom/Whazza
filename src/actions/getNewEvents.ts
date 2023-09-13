import prismadb from "@/lib/prismadb";


export default async function getNewEvents () {

    try {

        const events = await prismadb.event.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                leaderboard: true
            },
            take: 4
        })

        return events

    }catch(error: any){
        throw new Error(error)
    }


}
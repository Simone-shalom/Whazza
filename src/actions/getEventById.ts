import prismadb from "@/lib/prismadb";

interface IeventParams {
    eventId?: string;
}

export default async function getEventById (params: IeventParams) {

    const {eventId} = params;


    try {

        const event = await prismadb.event.findUnique({
            where: {
                id: eventId
            },
            include: {
                leaderboard: true
            }
        })

        if(!event){
            return null
        }

        return event

    }catch(error: any){
        throw new Error(error)
    }


}
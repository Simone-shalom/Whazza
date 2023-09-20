import prismadb from "@/lib/prismadb"

export default async function getEventParticipants(){

    try {

        const participants = await prismadb.user.count()

        return participants

    }catch(error: any){
        throw new Error(error)
    }



}
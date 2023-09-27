import prismadb from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";


export default async function getUserBadges () {

    const currentUser = await getCurrentUser()

    try {

        const userBadges = await prismadb.userBadge.findMany({
            where: {
                userId: currentUser?.id
            },
           include: {
            badge: true
           }
        })

        return userBadges

    }catch(error: any){
        throw new Error(error)
    }


}
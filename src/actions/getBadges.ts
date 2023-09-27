import prismadb from "@/lib/prismadb";


export default async function getBadges () {

    try {

        const badges = await prismadb.badge.findMany({
            orderBy: {
                points: 'asc'
            }
          
        })

        return badges

    }catch(error: any){
        throw new Error(error)
    }


}
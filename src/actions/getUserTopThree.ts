import prismadb from "@/lib/prismadb"
import getCurrentUser from "./getCurrentUser"


export default async function getUserTopThree () {


    const currentUser = await getCurrentUser()

    try {

        const winnerTimes = await prismadb.time.findMany({
            orderBy: {
                time: 'asc'
            },
            take: 3
        })

         // Check if the userId parameter is provided
        
         if(!currentUser?.id){
            throw new Error('No user authenticated')
         }
        // Find if the current user's ID exists in the winnerTimes
        const userHasWinnerTime = winnerTimes.some(
          (time) => time.userId === currentUser.id
        );
  
        return userHasWinnerTime
        
    

    }catch(error: any){
        throw new Error(error)
    }

}
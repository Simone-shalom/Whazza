import getCurrentUser from "@/actions/getCurrentUser";
import prismadb from "@/lib/prismadb";
import { ratelimit } from "@/lib/rate-limit";
import { NextResponse } from "next/server";

interface EParams {
    leaderboardId: string;
}

export async function POST(req: Request,{params}: {params: EParams}){

    try {

        const {leaderboardId} = params;
        const currentUser = await getCurrentUser()
        const body = await req.json()
        const {time, distance, amount} = body

        
        if(!currentUser){
            return new NextResponse("Unathenticated", {status: 403})
        }

        if(!leaderboardId || typeof leaderboardId !== 'string'){
            return new NextResponse("Event id is required", {status:400})
        }

         //rate limit part 
         const identifier = req.url + '-' + currentUser.id
         const {success} = await ratelimit(identifier)

         if(!success){
            return new NextResponse("You have just joined the event",{status:429})
        }
        //

        const leaderboardWithTimes = await prismadb.time.create({
            data: {
                        leaderboardId: leaderboardId,
                        userId: currentUser.id,
                        username: currentUser.name,
                        distance: distance,
                        time: time,
                        amount: amount,
                    }
        })

        return NextResponse.json(leaderboardWithTimes)

    }catch(error){
        console.log('Leaderboard POST_ERROR' , error)
        return new NextResponse ('Internal Server Error', {status:500})
    }
}
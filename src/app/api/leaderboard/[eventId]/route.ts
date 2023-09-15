import getCurrentUser from "@/actions/getCurrentUser";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

interface EParams {
    eventId: string;
}

export async function POST(req: Request,{params}: {params: EParams}){

    try {

        const {eventId} = params;
        const currentUser = await getCurrentUser()
        const body = await req.json()
        const {time, distance, amount} = body

        
        if(!currentUser){
            return new NextResponse("Unathenticated", {status: 403})
        }

        if(!eventId || typeof eventId !== 'string'){
            return new NextResponse("Event id is required", {status:400})
        }

        const leaderboardWithTimes = await prismadb.time.create({
            data: {
                        leaderboardId: eventId,
                        userId: currentUser.id,
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
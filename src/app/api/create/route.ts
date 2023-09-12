
import getCurrentUser from "@/actions/getCurrentUse";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";


export async function POST(req: Request, res: Response) {

    try {

        const currentUser = await getCurrentUser()

        if(!currentUser) {
            return new NextResponse("Unathenticated", {status: 403})
        }


        const body = await req.json()
        const {name, desc, imageSrc, time, distance, amount} = body

        // name: "",
        // imageUrl: "",
        // time: '',
        // distance: '',
        // amount: '',
        // desc: ''
  

       const event = await prismadb.event.create({
            data: {
                name: name,
                desc: desc,
                distance: distance,
                imageSrc: imageSrc,
                time: time,
                amount: amount,
                userId: currentUser.id,
                leaderboard: {
                    create: {}
                }
            },
       })

        return NextResponse.json(event)

    }catch(error){
        console.log('POST CREATE Event_ERROR' , error)
        return new NextResponse ('Internal Server Error', {status:500})
    }

}

import getCurrentUser from "@/actions/getCurrentUser";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";


export async function POST(req: Request, res: Response) {

    try {

        const currentUser = await getCurrentUser()

        if(!currentUser) {
            return new NextResponse("Unathenticated", {status: 403})
        }

        const body = await req.json()
        const {badge} = body


    const existingBadge = await prismadb.badge.findUnique({
        where: {
          id: badge.id,
        },
      });
  
      if (!existingBadge) {
        return new NextResponse("Badge not found", {status:404})
      }
  
     const userbadge =  await prismadb.userBadge.create({
        data: {
          userId: currentUser.id,
          badgeId: existingBadge.id,
        },
      });

        return NextResponse.json(userbadge)

    }catch(error){
        console.log('POST Badge Event_ERROR' , error)
        return new NextResponse ('Internal Server Error', {status:500})
    }

}
'use client'

import { Event } from "@prisma/client"
import { format } from "date-fns";
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Card } from "./ui/card"
import { Separator } from "./ui/separator";
import { ArrowRightIcon, ChevronLeftCircleIcon, MoveLeft } from "lucide-react";
import { Progress } from "./ui/progress";

interface EventsCardProps {
    data: Event
    eventBlur?: boolean
    usersCount: number 
}

const EventsCard = ({data, eventBlur , usersCount}: EventsCardProps) => {

    const router = useRouter()

    const date = new Date(data.createdAt)
    const formatedCreatedAt = format(date,'HH:mm PP' )

    const eventsBlur = eventBlur ? 'blur-sm' : ''

  return (
    <>
    <div
        onClick={()=> router.push(`/events/${data.id}`)}
        className={` col-span-1 cursor-pointer  border-collapse shadow-2xl border rounded-b-xl transition duration-1000 hover:scale-110 hover:translate-y-5 hover:translate-x-5`} >
        <div className='flex flex-col  w-full'>
            <div className='w-full relative overflow-hidden rounded-top-xl h-[160px]'>
                <Image src={data.imageSrc} alt="Image url"  fill
                    className= {`${eventsBlur} object-cover h-full w-full  transition ease-in `}/>
                    <div className="absolute left-1 top-5">
                        <ChevronLeftCircleIcon size={32} color="white" fill="" />
                    </div>
            </div>
            <Card className=" rounded-t-none rounded-b-xl px-5 py-3 bg-gradient-to-b from-purple-50 to-purple-100 border-1">
            <div className='text-xl font-semibold'>
                 {data.name}
            </div>
            <div className='text-md text-gray-700 pb-2 truncate'>
                 {data.desc} 
            </div>
            <Separator />
            <Progress value={33}/>
            <div className="flex justify-between font-semibold pt-3 pb-1">
                <p>
                    Your place
                </p>
                <p className={`${eventsBlur} font-bold`}>
                    10
                </p>
            </div>
            <Separator />
            <div className="flex justify-between font-semibold pt-3 pb-1">
                <p>
                    View Leaderboard
                </p>
                <ArrowRightIcon size={24}/>
            </div>
            <Separator />
            <div className="flex pt-3 pb-1">
                <p className="font-semibold">
                    Challenge details
                </p>
            </div>   
            <Separator />
              <p className="pt-1">Already 
                <span className="font-bold px-1 text-black">{usersCount}</span>
                {data.participants} people has joined</p> 
            </Card>
            </div>
        </div>
        </>
    
  )
}

export default EventsCard
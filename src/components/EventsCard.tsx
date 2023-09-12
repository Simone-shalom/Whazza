'use client'

import { Event } from "@prisma/client"
import { format } from "date-fns";
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Card } from "./ui/card"

interface EventsCardProps {
    data: Event
}

const EventsCard = ({data}: EventsCardProps) => {

    const router = useRouter()

    const date = new Date(data.createdAt)
    const formatedCreatedAt = format(date,'HH:mm PP' )

  return (
    <div
        onClick={()=> router.push(`/listings/${data.id}`)}
        className='col-span-1 cursor-pointer rounded-xl hover:rotate-0 rotate- transition duration-500 hover:scale-125'>
        <div className='flex flex-col  w-full'>
            <div className='w-full relative overflow-hidden rounded-top-xl h-[160px]'>
                <Image src={data.imageSrc} alt="Image url"  fill
                    className='object-cover h-full w-full  transition ease-in '/>
            </div>
            <Card className=" rounded-t-none rounded-b-xl px-5 py-5">
            <div className='text-xl font-semibold'>
                 {data.name}
            </div>
            <div className='text-sm'>
                 {data.desc}
            </div>
            <div className='flex items-center gap-1'>
                <div className='font-medium'>
                    Created by <span className="font-bold">{data.createdBy}</span>
                </div>
            </div>
            <div className='text-md'>
                 Added at: 
                 <span className="font-semibold"> {formatedCreatedAt}</span> 
            </div>
            <div>
               Already (10){data.participants} people has joined
            </div>
            </Card>
        </div>
    </div>
  )
}

export default EventsCard
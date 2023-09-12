'use client'

import { Event } from "@prisma/client"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface EventsCardProps {
    data: Event
}

const EventsCard = ({data}: EventsCardProps) => {

    const router = useRouter()

  return (
    <div
        onClick={()=> router.push(`/listings/${data.id}`)}
        className='col-span-1 cursor-pointer'>
        <div className='flex flex-col gap-2 w-full'>
            <div className='aspect-square w-full relative overflow-hidden rounded-xl'>
                <Image src={data.imageSrc} alt="Image url" fill  
                    className='object-cover h-full w-full hover:scale-110 transition ease-in '/>
            </div>
            <div className='text-xl font-semibold'>
                 {data.name}
            </div>
            <div className='text-sm'>
                 {data.desc}
            </div>
            <div className='flex items-center gap-1'>
                <div className='font-semibold'>
                    Created by {data.distance}
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventsCard
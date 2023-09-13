'use client'

import { Event } from "@prisma/client"
import Image from "next/image"
import { ScrollArea } from "./ui/scroll-area"
import { Tag } from "@/app/(routes)/events/[eventId]/components/EventByIdClient"
import { Separator } from "./ui/separator"

interface EventByIdCardProps {
    event: Event
    tags: Tag[]
}


const EventByIdCard = ({event, tags}: EventByIdCardProps) => {
  return (
    <div className="flex flex-row justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-col">
          <div className="mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image  alt="content" className="object-cover object-center h-full w-full" src={event.imageSrc} width={200} height={200} />
            </div>
            <div className="flex flex-col sm:flex-row w-full px-24 space-x-16">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{event.name}</h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">{event.desc}</p>
                  <p>{event.createdBy}</p> 
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l  border-gray-500 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h1 className="text-3xl font-semibold text-black text-center pb-1">
                  Leaderboard
                </h1>
                <Separator className="bg-gray-500"/>
              <ScrollArea className="h-72 pt-2 rounded-md border ">
                <div className="p-4">
                  <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                  {tags.map((tag) => (
                    <>
                      <div key={tag.name} className="text-sm flex justify-between">
                        <p>
                          {tag.name}
                        </p>
                        <p>
                          {tag.time}
                        </p>
                      </div>
                      <Separator className="my-2" />
                    </>
                  ))}
                </div>
              </ScrollArea>
                <a className="text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  )
}

export default EventByIdCard
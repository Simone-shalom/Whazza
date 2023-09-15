'use client'

import { Event, Leaderboard } from "@prisma/client"
import Image from "next/image"
import { ScrollArea } from "./ui/scroll-area"
import { Tag } from "@/app/(routes)/events/[eventId]/components/EventByIdClient"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { useLeaderboardModal } from "@/hooks/use-leaderboard-modal"

interface EventByIdCardProps {
    event: Event
    tags: Tag[]
    leaderboard: Leaderboard[]
}


const EventByIdCard = ({event, tags, leaderboard}: EventByIdCardProps) => {

  const leaderBoardModal = useLeaderboardModal()

  return (
    <div className="flex flex-row justify-center items-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-10 mx-auto flex flex-col">
          <div className="mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image  alt="content" className="object-cover object-center h-full w-full" src={event.imageSrc} width={200} height={200} />
            </div>
            <div className="flex flex-col md:flex-row w-full items-center md:items-start px-2 md:space-x-12">
              <div className="sm:w-1/2 text-center md:pr-8 sm:py-8">
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-3xl">{event.name}</h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-xl px-2 text-black capitalize">{event.desc}</p>
                  <div className="flex flex-col pt-2">
                    <p className="text-lg font-semibold px-2">{event.time}</p>
                    <p className="text-lg font-semibold px-2">{event.distance}</p>
                    <p className="text-lg font-semibold px-2">{event.amount}</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold px-2 pt-2">Already joined by 
                      <span className="text-xl mx-1 ">{event.participants.length}</span> 
                      users
                    </p>
                  </div>
                  <p className=" pt-1 text-muted-foreground text-lg font-bold">{event.createdBy}</p> 
                </div>
              </div>
              <div className="w-full md:w-2/3 md:pl-8 md:py-8 md:border-l  border-gray-500 md:border-t-0 border-t mt-4 pt-4 md:mt-0 md:text-left">
                <h1 className="text-3xl font-semibold text-black text-center pb-1">
                  Leaderboard
                </h1>
                <Separator className="bg-gray-500"/>
              <ScrollArea className="h-72 pt-2 rounded-md border ">
                <div className="p-4">
                  {tags.map((tag, index) => (
                    <>
                      <div key={tag.name} className="text-lg flex justify-between">
                        <p className="font-semibold">
                        #{index + 1} @{tag.name}
                        </p>
                          <p className="font-bold text-xl ">
                            {tag.time}
                          </p>
                      </div>
                      <Separator className="my-2" />
                    </>
                  ))}
                </div>
              </ScrollArea>
              <div className="pt-5 flex items-center pb-10 md:pb-0 justify-center">
              <Button 
                onClick={leaderBoardModal.onOpen}
                className="text-center px-5  text-lg hover:scale-110 transition duration-300">
                Join
               </Button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  )
}

export default EventByIdCard
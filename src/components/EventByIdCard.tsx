'use client'

import { Event, Leaderboard, Time, User } from "@prisma/client"
import Image from "next/image"
import { ScrollArea } from "./ui/scroll-area"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { useLeaderboardModal } from "@/hooks/use-leaderboard-modal"
import { LeaderBoardModal } from "./modals/LeaderboardModal"
import UserPoints from "./UserPoints"

interface EventByIdCardProps {
    event: Event
    leaderboard: Leaderboard
    times: Time[]
    participants: number 
    eventPoints: number 
    userPlace: number | null
    currentUser: User | null
}


const EventByIdCard = ({event, leaderboard, times, participants, eventPoints ,userPlace, currentUser}:
   EventByIdCardProps) => {

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
                      <span className="text-xl mx-1 ">{participants}</span> 
                      users
                    </p>
                  </div>
                  <div>
                    <h3 className="capitalize text-xl font-semibold pt-2">createdBy </h3>
                    <p className="text-muted-foreground text-xl font-bold">
                    {event.createdBy}  
                    </p>
                  </div>
                  <div className="text-xl font-semibold flex space-x-3  bg-white rounded-md px-5 my-3 items-center justify-center">
                    <p className="text-xl">Your place: </p>
                    <div className="font-bold text-2xl">
                       {userPlace}
                    </div>
                  </div>
                  <UserPoints userPoints={eventPoints}/>
                </div>
              </div>
              <div className="w-full md:w-2/3 md:pl-8 md:py-8 md:border-l  border-gray-500 md:border-t-0 border-t mt-4 pt-4 md:mt-0 md:text-left">
                <h1 className="text-3xl font-semibold text-black text-center pb-1">
                  Leaderboard
                </h1>
                <Separator className="bg-gray-500"/>
              <ScrollArea className="h-72 pt-2 rounded-md border ">
                <div className="p-4">
                  {times.map((time, index) => (
                    <>
                    <div>
                    {time.username === currentUser?.name && (
                            <div className="flex">
                              <p >Your time</p>
                              
                            </div>)}
                    </div>
                      <div
                        key={time.id}
                        className={`text-lg flex justify-between rounded-xl p-1 border-dotted  ${
                          index === 0 ? 'border-2 border-yellow-500' : index === 1 ? 'border-2 border-gray-700' : index === 2 ? 'border-2 border-orange-900' : ''
                        }`}>
                        <p className="font-semibold">
                        #{index + 1} @{time.username}
                        </p>
                          <p className="font-bold text-xl ">
                            {time.time}
                          </p>
                      </div>
                      <Separator className="my-2" />
                    </>
                  ))}
                </div>
              </ScrollArea>
              <div className="pt- flex items-center pb-10 md:pb-0 justify-center">
              <Button 
                onClick={leaderBoardModal.onOpen}
                className="text-center px-5  text-lg hover:scale-110 transition duration-300">
                Join
               </Button>
               <LeaderBoardModal leaderboard={leaderboard}/>
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
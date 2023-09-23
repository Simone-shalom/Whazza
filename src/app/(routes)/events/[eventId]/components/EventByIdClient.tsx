'use client'

import Container from "@/components/Container"
import EventByIdCard from "@/components/EventByIdCard"
import { Event, Leaderboard, Time } from "@prisma/client"
import { useRouter } from "next/navigation"

interface EventByIdClientProps {
  event: Event
  leaderboard: Leaderboard
  times: Time[]
  participants: number | null
  eventPoints: number | null
}

export interface Tag {
  name: string;
  time: string;
}

const EventByIdClient = ({event, leaderboard, times, participants, eventPoints}: EventByIdClientProps) => {

    const router = useRouter()



  return (
  
    <Container>
     <EventByIdCard event={event}  leaderboard={leaderboard} times={times}
        participants={participants} eventPoints={eventPoints}/>
        {/* {session && (
          <ImageUpload onChange={()=>{}} value=""/>
        )} */}
    </Container>
  )
}

export default EventByIdClient
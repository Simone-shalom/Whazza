'use client'

import Container from "@/components/Container"
import EventByIdCard from "@/components/EventByIdCard"
import { Event, Leaderboard } from "@prisma/client"
import { redirect, useRouter } from "next/navigation"

interface EventByIdClientProps {
  event: Event
  leaderboard: Leaderboard
}

export interface Tag {
  name: string;
  time: string;
}

const EventByIdClient = ({event, leaderboard}: EventByIdClientProps) => {

    const router = useRouter()

  const tags: Tag[] = [
    {
      name: 'david',
      time: '1:33'
    },
    {
      name: 'david',
      time: '2:30'
    },
    {
      name: 'david',
      time: '3:30'
    },
    {
      name: 'david',
      time: '5:30'
    },
    {
      name: 'david',
      time: '1:20'
    },
    {
      name: 'david',
      time: '1:15'
    },
    {
      name: 'david',
      time: '1:20'
    },
    {
      name: 'david',
      time: '1:30'
    },
  ]

  return (
  
    <Container>
     <EventByIdCard event={event} tags={tags} leaderboard={leaderboard}/>
        {/* {session && (
          <ImageUpload onChange={()=>{}} value=""/>
        )} */}
    </Container>
  )
}

export default EventByIdClient
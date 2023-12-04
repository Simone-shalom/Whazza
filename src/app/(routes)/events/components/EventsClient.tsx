'use client'

import Container from "@/components/Container"
import EventsDisplay from "@/components/EventsDisplay"
import { Button } from "@/components/ui/button"
import { Event } from "@prisma/client"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

interface EventsClientProps {
  events: Event[]
  usersCount: number | null
  hasSub: boolean
}



const EventsClient = ({events, usersCount, hasSub}: EventsClientProps) => {

    const router = useRouter()
 
  const onCreateEvent = () => {
    if(hasSub){
      router.push('/createEvent')
    }else {
      toast.error("Only subscribed users can create events")
    }
  }

  return (
  
    <Container>
      <div 
        data-testid='events-display'
        className="flex flex-col items-center justify-center ">
      <Button className="text-xl font-semibold  pb-2"
        onClick={onCreateEvent}>
        Create an Event
      </Button>
      <h1 className="text-black text-4xl font-semibold pt-10">All available events</h1>
      </div>
      <div className="flex flex-row justify-center items-center pb-20">
         <EventsDisplay events={events} usersCount={usersCount}/>
      </div>
    </Container>
  )
}

export default EventsClient
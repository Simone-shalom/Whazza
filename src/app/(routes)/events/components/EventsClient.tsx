'use client'

import Container from "@/components/Container"
import EventsDisplay from "@/components/EventsDisplay"
import { Button } from "@/components/ui/button"
import { Event } from "@prisma/client"
import { redirect, useRouter } from "next/navigation"

interface EventsClientProps {
  events: Event[]
  usersCount: number | null
}



const EventsClient = ({events, usersCount}: EventsClientProps) => {

    // const { data: session } = useSession();
    // const eventsModal2 = useEventsModal2()
    const router = useRouter()

 
  //   const OpenEventModal = () => {
   
  //     if(!session){
  //       toast.error("You must be logged in to create an Event")
  //       router.push('/auth')
  //     } else {
  //       router.push('/createEvent')
  //     }
      
  // }

  return (
  
    <Container>
      <div className="flex flex-col items-center justify-center ">
      <Button className="text-xl font-semibold  pb-2"
        onClick={()=> router.push('/createEvent')}>
        Create an Event
      </Button>
      <h1 className="text-black text-4xl font-semibold pt-10">All available events</h1>
      </div>
      <div className="flex flex-row justify-center items-center pb-20">
         <EventsDisplay events={events} usersCount={usersCount}/>
      </div>
        {/* {session && (
          <ImageUpload onChange={()=>{}} value=""/>
        )} */}
    </Container>
  )
}

export default EventsClient
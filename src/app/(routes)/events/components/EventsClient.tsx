'use client'

import Container from "@/components/Container"
import { InitialModal } from "@/components/modals/EventModal2"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useEventsModal } from "@/hooks/use-events-modal"
import { useEventsModal2 } from "@/hooks/use-events-modal2"
import { useSession } from "next-auth/react"
import { redirect, useRouter } from "next/navigation"
import toast from "react-hot-toast"





const EventsClient = () => {

    const { data: session } = useSession();
    const eventsModal2 = useEventsModal2()
    const router = useRouter()

 
    const OpenEventModal = () => {
   
      if(!session){
        toast.error("You must be logged in to create an Event")
        router.push('/auth')
      } else {
        eventsModal2.onOpen()
      }
      
  }

  return (
  
    <Container>
      <div className="flex flex-col items-center justify-center">
      <Button className="text-xl font-semibold  pb-2"
        onClick={()=> router.push('/createEvent')}>
        Create an Event
      </Button>
      </div>
        {/* {session && (
          <ImageUpload onChange={()=>{}} value=""/>
        )} */}
    </Container>
  )
}

export default EventsClient
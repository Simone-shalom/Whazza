'use client'

import Container from "@/components/Container";
import { InitialModal } from "@/components/modals/EventModal2"
import { Button } from "@/components/ui/button";
import { useEventsModal2 } from "@/hooks/use-events-modal2";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const CreateEventClient = () => {
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
        <Button className="text-xl font-semibold pb-2" variant='default'
            onClick={OpenEventModal}>
            Add Information
        </Button>
        <InitialModal />
        </div>
    </Container>
  )
}

export default CreateEventClient
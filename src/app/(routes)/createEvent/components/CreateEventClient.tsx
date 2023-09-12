'use client'

import AnimatedBlob from "@/components/AnimatedBlob";
import Container from "@/components/Container";
import { InitialModal } from "@/components/modals/EventModal2"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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

  console.log(session)

  return (

    <Container>
      <h1 className="text-3xl text-center pb-2 font-bold">
        Event creation form
      </h1>
      <Card className="px-20 py-5 bg-transparent border-black border-2 border-dotted">
      <div className="flex flex-col items-center justify-center">
        <Button className="text-xl font-semibold pb-2" variant='default'
            onClick={OpenEventModal}>
            Add Information
        </Button>
        <InitialModal />
        </div>
      </Card>
    </Container>
  )
}

export default CreateEventClient
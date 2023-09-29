'use client'

import Container from "@/components/Container"
import EventsDisplay from "@/components/EventsDisplay"
import { Button } from "@/components/ui/button"
import useBadgeStore from "@/hooks/use-badges-store"
import { Event } from "@prisma/client"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

interface EventsClientProps {
  events: Event[]
  usersCount: number | null
  hasSub: boolean
}



const EventsClient = ({events, usersCount, hasSub}: EventsClientProps) => {
    // const { data: session } = useSession();
    // const eventsModal2 = useEventsModal2()
    const router = useRouter()
    const useBadges = useBadgeStore()

    console.log(useBadges.selectedBadge)
 
  //   const OpenEventModal = () => {
   
  //     if(!session){
  //       toast.error("You must be logged in to create an Event")
  //       router.push('/auth')
  //     } else {
  //       router.push('/createEvent')
  //     }
      
  // }

  const onCreateEvent = () => {
    if(hasSub){
      router.push('/createEvent')
    }else {
      toast.error("Only subscribed users can create events")
    }
  }

  return (
  
    <Container>
      <div className="flex flex-col items-center justify-center ">
      <Button className="text-xl font-semibold  pb-2"
        onClick={onCreateEvent}>
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
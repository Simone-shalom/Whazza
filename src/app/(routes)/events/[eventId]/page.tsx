import Container from "@/components/Container"
import { PageWrapper } from "@/components/animations/pageWrapper"
import Footer from "@/components/Footer"
import EventByIdClient from "./components/EventByIdClient"
import getEventById from "@/actions/getEventById"
import getLeaderboard from "@/actions/getLeaderboard"
import getTimes from "@/actions/getTImes"
import getEventParticipants from "@/actions/getEventParticipants"
import getUserPoints from "@/actions/getEventPoints"
import getCurrentUser from "@/actions/getCurrentUser"
import { redirect } from "next/navigation"
import getEventPoints from "@/actions/getEventPoints"


interface EventParams {
  eventId?: string
}

const EventsByIdPage = async({params}: {params: EventParams}) => {

  const currentUser = await getCurrentUser()

  if(!currentUser){
    redirect('/dashboard')
  }


  const event = await getEventById(params)
  const leaderboard = await getLeaderboard({eventId: event?.id})
  const times = await getTimes({leaderboardId: leaderboard.id})
  const eventPaticipants = await getEventParticipants()
  const eventPoints = await getEventPoints({leaderboardId: leaderboard.id})
  
  console.log(eventPoints)

  if(!event){
    return null
  }

  if(!leaderboard){
    return (
      <div>
        
      </div>
    )
  }

  return (
    <Container>
    <PageWrapper>
    <div className='pt-24 min-h-screen '>
      <EventByIdClient event={event} leaderboard={leaderboard} times={times} 
        participants={eventPaticipants} eventPoints={eventPoints}/>
        <Footer />
    </div>
    </PageWrapper>
  </Container>
  )
}

export default EventsByIdPage
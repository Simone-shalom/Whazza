import Container from "@/components/Container"
import { PageWrapper } from "@/components/animations/pageWrapper"
import Footer from "@/components/Footer"
import EventByIdClient from "./components/EventByIdClient"
import getEventById from "@/actions/getEventById"
import getLeaderboard from "@/actions/getLeaderboard"
import getTimes from "@/actions/getTImes"
import getEventParticipants from "@/actions/getEventParticipants"
import getWinnerTimes from "@/actions/getWinnersTimes"
import getUserPoints from "@/actions/getEventPoints"


interface EventParams {
  eventId?: string
}

const EventsByIdPage = async({params}: {params: EventParams}) => {

  const event = await getEventById(params)
  const leaderboard = await getLeaderboard({eventId: event?.id})
  const times = await getTimes({leaderboardId: leaderboard.id})
  const eventPaticipants = await getEventParticipants()
  const winnersTimes =await getWinnerTimes({leaderboardId: leaderboard.id})
  const userPoints = await getUserPoints({leaderboardId: leaderboard.id})
  
  console.log(userPoints)

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
        participants={eventPaticipants} />
        <Footer />
    </div>
    </PageWrapper>
  </Container>
  )
}

export default EventsByIdPage
import Container from "@/components/Container"
import { PageWrapper } from "@/components/animations/pageWrapper"
import Footer from "@/components/Footer"
import EventByIdClient from "./components/EventByIdClient"
import getEventById from "@/actions/getEventById"
import getLeaderboard from "@/actions/getLeaderboard"


interface EventParams {
  eventId?: string
}

const EventsByIdPage = async({params}: {params: EventParams}) => {

  const event = await getEventById(params)
  const leaderboard = await getLeaderboard({eventId:  event?.id})

  console.log(leaderboard)

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
      <EventByIdClient event={event} leaderboard={leaderboard}/>
        <Footer />
    </div>
    </PageWrapper>
  </Container>
  )
}

export default EventsByIdPage
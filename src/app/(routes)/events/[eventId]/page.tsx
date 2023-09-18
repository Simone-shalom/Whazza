import Container from "@/components/Container"
import { PageWrapper } from "@/components/animations/pageWrapper"
import Footer from "@/components/Footer"
import EventByIdClient from "./components/EventByIdClient"
import getEventById from "@/actions/getEventById"
import getLeaderboard from "@/actions/getLeaderboard"
import getTimes from "@/actions/getTImes"
import getTopThreeTimes from "@/actions/getTopThree"


interface EventParams {
  eventId?: string
}

const EventsByIdPage = async({params}: {params: EventParams}) => {

  const event = await getEventById(params)
  const leaderboard = await getLeaderboard({eventId: event?.id})
  const times = await getTimes({leaderboardId: leaderboard.id})
  const timesTopThree = await getTopThreeTimes({topCount:3})

  console.log(timesTopThree)

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
      <EventByIdClient event={event} leaderboard={leaderboard} times={times}/>
        <Footer />
    </div>
    </PageWrapper>
  </Container>
  )
}

export default EventsByIdPage
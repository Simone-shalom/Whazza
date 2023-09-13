import Container from "@/components/Container"
import { PageWrapper } from "@/components/animations/pageWrapper"
import EventsClient from "../components/EventsClient"
import Footer from "@/components/Footer"
import getEvents from "@/actions/getEvents"
import EventByIdClient from "./components/EventByIdClient"
import getEventById from "@/actions/getEventById"


interface EventParams {
  eventId?: string
}

const EventsByIdPage = async({params}: {params: EventParams}) => {

  const event = await getEventById(params)

  if(!event){
    return null
  }

  return (
    <Container>
    <PageWrapper>
    <div className='pt-24 min-h-screen '>
      <EventByIdClient  event={event}/>
        <Footer />
    </div>
    </PageWrapper>
  </Container>
  )
}

export default EventsByIdPage
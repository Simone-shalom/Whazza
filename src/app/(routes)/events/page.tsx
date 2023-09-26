import Container from "@/components/Container"
import Footer from "@/components/Footer"
import { PageWrapper } from "@/components/animations/pageWrapper"
import EventsClient from "./components/EventsClient"
import getEvents from "@/actions/getEvents"
import getCurrentUser from "@/actions/getCurrentUser"
import getEventParticipants from "@/actions/getEventParticipants"
import { hasSubscription } from "@/lib/stripe"


const EventsPage = async() => {

  const events = await getEvents()
  const currentUser = await getCurrentUser()
  const eventPaticipants = await getEventParticipants()
  const hasSub = await hasSubscription()


  return (
      <Container>
        <PageWrapper>
        <div className='pt-24 min-h-screen '>
          <EventsClient events={events} usersCount={eventPaticipants} hasSub={hasSub}/>
            <Footer />
        </div>
        </PageWrapper>
      </Container>
  )
}

export default EventsPage
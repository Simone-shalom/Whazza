import Container from "@/components/Container"
import Footer from "@/components/Footer"
import RelatedEvents from "@/components/RelatedEvents"
import { PageWrapper } from "@/components/animations/pageWrapper"
import { Button } from "@/components/ui/button"
import EventsClient from "./components/EventsClient"
import getEvents from "@/actions/getEvents"
import getCurrentUser from "@/actions/getCurrentUser"


const EventsPage = async() => {

  const events = await getEvents()
  const currentUser = await getCurrentUser()

  return (
      <Container>
        <div className='pt-24 min-h-screen '>
          <EventsClient events={events}/>
            <Footer />
        </div>
      </Container>
  )
}

export default EventsPage
import Container from "@/components/Container"
import Footer from "@/components/Footer"
import RelatedEvents from "@/components/RelatedEvents"
import { PageWrapper } from "@/components/animations/pageWrapper"
import { Button } from "@/components/ui/button"
import EventsClient from "./components/EventsClient"


const EventsPage = () => {
  return (
      <Container>
        <div className='pt-24 min-h-screen '>
          <EventsClient />
          <div className="flex justify-center items-center pt-32">
            <RelatedEvents />
          </div>
            <Footer />
        </div>
      </Container>
  )
}

export default EventsPage
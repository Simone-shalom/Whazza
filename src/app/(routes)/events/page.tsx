import Container from "@/components/Container"
import Footer from "@/components/Footer"
import RelatedEvents from "@/components/RelatedEvents"
import { PageWrapper } from "@/components/animations/pageWrapper"


const EventsPage = () => {
  return (
      <Container>
        <div className='pt-24 min-h-screen '>
          <div className="flex justify-center items-center pt-32">
            <RelatedEvents />
          </div>
            <Footer />
        </div>
      </Container>
  )
}

export default EventsPage
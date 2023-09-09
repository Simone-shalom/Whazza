import Container from "@/components/Container"
import Footer from "@/components/Footer"
import RelatedEvents from "@/components/RelatedEvents"


const EventsPage = () => {
  return (
  <Container>
    <div className='pt-10 h-screen overflow-y-hidden flex px-5 lg:px-10 items-center justify-center'>
        <RelatedEvents />
    </div>
  </Container>
  )
}

export default EventsPage
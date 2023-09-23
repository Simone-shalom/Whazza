
import getEventParticipants from '@/actions/getEventParticipants'
import getNewEvents from '@/actions/getNewEvents'
import Container from '@/components/Container'
import EventsDisplay from '@/components/EventsDisplay'
import Footer from '@/components/Footer'
import { LandingHero } from '@/components/LandingHero'
import { Testimonials } from '@/components/Testimonials'
import { PageWrapper } from '@/components/animations/pageWrapper'


export default async function Home() {

  const newEvents = await getNewEvents()
  const eventPaticipants = await getEventParticipants()

  return (
    <PageWrapper>
      <Container>
        <LandingHero />
        <div className=' flex px-5 lg:px-10 items-center justify-center'>
          <EventsDisplay events={newEvents}  usersCount={eventPaticipants}/>
        </div>
        <Testimonials />
        <Footer />
      </Container>
    </PageWrapper>
  )
}

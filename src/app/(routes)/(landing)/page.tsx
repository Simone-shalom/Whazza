
import getEventParticipants from '@/actions/getEventParticipants'
import getNewEvents from '@/actions/getNewEvents'
import Container from '@/components/Container'
import EventsDisplay from '@/components/EventsDisplay'
import Footer from '@/components/Footer'
import { LandingHero } from '@/components/LandingHero'
import { Testimonials } from '@/components/Testimonials'
import { CardWrapper } from '@/components/animations/cardWrapper'
import { PageWrapper } from '@/components/animations/pageWrapper'


export default async function Home() {

  const newEvents = await getNewEvents()
  const eventPaticipants = await getEventParticipants()

  return (
    <PageWrapper>
      <Container>
        <LandingHero />
        <CardWrapper>
        <div className=' flex px-5 lg:px-10 items-center justify-center'>
          <EventsDisplay events={newEvents}  usersCount={eventPaticipants} landing/>
        </div>
        </CardWrapper>
        <Testimonials />
        <Footer />
      </Container>
    </PageWrapper>
  )
}

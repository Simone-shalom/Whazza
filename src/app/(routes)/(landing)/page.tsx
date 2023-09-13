
import getEvents from '@/actions/getEvents'
import getNewEvents from '@/actions/getNewEvents'
import AnimatedBlob from '@/components/AnimatedBlob'
import Container from '@/components/Container'
import EventsDisplay from '@/components/EventsDisplay'
import Footer from '@/components/Footer'
import LandingButtons from '@/components/LandingButtons'
import { LandingHero } from '@/components/LandingHero'
import RelatedEvents from '@/components/RelatedEvents'
import { Testimonials } from '@/components/Testimonials'
import { PageWrapper } from '@/components/animations/pageWrapper'


export default async function Home() {

  const newEvents = await getNewEvents()

  return (
    <PageWrapper>
      <Container>
        <LandingHero />
        <div className=' flex px-5 lg:px-10 items-center justify-center'>
          <EventsDisplay events={newEvents} landing/>
        </div>
        <Testimonials />
        <Footer />
      </Container>
    </PageWrapper>
  )
}

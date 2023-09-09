
import AnimatedBlob from '@/components/AnimatedBlob'
import Container from '@/components/Container'
import Footer from '@/components/Footer'
import LandingButtons from '@/components/LandingButtons'
import { LandingHero } from '@/components/LandingHero'
import RelatedEvents from '@/components/RelatedEvents'
import { Testimonials } from '@/components/Testimonials'
import { PageWrapper } from '@/components/animations/pageWrapper'


export default function Home() {
  return (
    <PageWrapper>
      <Container>
        <LandingHero />
        <div className='pt-20 flex px-5 lg:px-10 items-center justify-center'>
          <RelatedEvents />
        </div>
        <Testimonials />
      </Container>
    </PageWrapper>
  )
}

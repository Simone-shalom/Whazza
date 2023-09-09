
import AnimatedBlob from '@/components/AnimatedBlob'
import Container from '@/components/Container'
import LandingButtons from '@/components/LandingButtons'
import { Button } from '@/components/ui/button'
import { ArrowBigRightDash, GithubIcon, SparkleIcon } from 'lucide-react'

export default function Home() {
  return (
    <Container>
      <div className='flex items-center justify-center pt-24'>
      <AnimatedBlob>
      <div className="m-8 relative space-y-4">
        <div className="flex items-center justify-center text-4xl xl:text-5xl 2xl:text-6xl font-semibold pb-2">
          Your best events app
          </div>
          <div className="flex items-center justify-center text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-orange-700">
          Sport challenges
          </div>
      
          <div className="flex items-center justify-center text-2xl xl:text-3xl 2xl:text-4xl  font-semibold text-gray-600">
          In your hand
          <ArrowBigRightDash size={40} className='text-black ml-2'/>
        </div>
       <LandingButtons />
      </div>
      </AnimatedBlob>
      </div>
      

    </Container>
  )
}

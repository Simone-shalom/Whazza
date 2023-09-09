'use client'

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { GithubIcon } from "lucide-react"

const LandingButtons = () => {
    const router = useRouter()
    
  return (
    <div className='flex items-center justify-center space-x-5'>
        <Button className='hover:opacity-80 hover:scale-110 transition'
        onClick={()=> router.push('/auth')}>
        Get started
        </Button>
        <Button variant='secondary' className='hover:opacity-80 hover:scale-110 transition'>
        Github
        <GithubIcon size={32}/>
        </Button>
  </div>
  )
}

export default LandingButtons
'use client'

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { GithubIcon } from "lucide-react"
import { useSession } from "next-auth/react"

const LandingButtons = () => {

    const { data: session } = useSession();
    const router = useRouter()

    const githubLink = 'https://github.com/Simone-shalom/Whazza' 

    const goToGitHub = () => {
      window.open(githubLink, "_blank")
    }
    
   const goAuthOrDashboard = () => {
    if(session){
      router.push('/dashboard')
    }else {
      router.push('/auth')
    }
   }

  return (
    <div data-testid="buttonsContainer" className='flex items-center justify-center space-x-5'>
        <Button data-testid="StartedBtn" className='hover:opacity-80 hover:scale-110 transition'
        onClick={goAuthOrDashboard}>
        Get started
        </Button>
        <Button data-testid="GithubBtn"
          onClick={goToGitHub} 
          variant='secondary' className='hover:opacity-80 hover:scale-110 transition'>
        Github
        <GithubIcon size={32}/>
        </Button>
  </div>
  )
}

export default LandingButtons
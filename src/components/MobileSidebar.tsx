'use client'

import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import {Menu} from 'lucide-react'
import Link from "next/link"
import { useSession } from "next-auth/react"
import AnimatedBlob from "./AnimatedBlob"
import LogoutBtn from "./LogoutBtn"

interface MobileSidebarProps {
  
}

const MobileSidebar = ({}: MobileSidebarProps) => {

    const { data: session } = useSession();
    const [mounted, setMounted] = useState(false)

  useEffect(() => {

    setMounted(true)

  },[])

  if(!mounted) {
    return null
  }

  const generateDashboardLink = () => {
    const callbackUrl = '/dashboard'; // Specify your desired dashboard URL
    const customSignInPage = '/auth'; // Path to your custom sign-in page

    if (session) {
      return callbackUrl;
    } else {
      // Generate the link to your custom sign-in page with callbackUrl
      return `${customSignInPage}?callbackUrl=${encodeURIComponent(callbackUrl)}`;
    }
  };


  return (
   <Sheet>
    <SheetTrigger>
      <Button variant='ghost' className="md:hidden">
        <Menu size={20}/>
      </Button>
    </SheetTrigger>
    <SheetContent side='right' className="p-0 w-64">
        <div className="flex flex-col items-center gap-10 pt-20 cursor-pointer">
        <Link href={generateDashboardLink()} className="font-medium text-sm text-white bg-black px-4 py-2 rounded-lg hover:opacity-80">
            Dashboard
          </Link>
          <Link href="/events" className="font-medium text- text-black hover:opacity-80">
            Events
          </Link>
          <Link href="/pricing" className="font-medium text- text-black hover:opacity-80">
            Pricing
          </Link>
          <div className="pt-64 w-full">
            <AnimatedBlob>
            </AnimatedBlob>  
          </div>
          <p className="pt-64">
            Simone' s
          </p>
        </div>
    </SheetContent>
   </Sheet>
  )
}

export default MobileSidebar
'use client'
import {signOut} from 'next-auth/react'
import { Button } from './ui/button'

const LogoutBtn = () => {
  return (
    <div>
        <Button onClick={()=> signOut({ callbackUrl: '/' })} variant='outline'>
            Logout
        </Button>
    </div>
  )
}

export default LogoutBtn
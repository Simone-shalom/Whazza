'use client'

import { signIn } from 'next-auth/react';

const SiginEmailBtn = () => {

    const handleSignIn = async () => {
        await signIn('email', { callbackUrl: '/dashboard' });
      };

  return (
    <div className="flex items-center justify-center">
          <div
            className=" text-black bg-white/90   border-2 border-black focus:ring-4 transition duration-50 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
            Sign in with Email</div>
        </div>
  )
}

export default SiginEmailBtn
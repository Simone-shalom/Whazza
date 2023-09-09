import React from 'react'


const AnimatedBlob = ({children}: {children: React.ReactNode}) => {
  return (
  <div className="relative w-full max-w-lg xl:max-w-3xl">
    <div className="absolute top-0 -left-4 w-72 xl:w-[400px] h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute top-0 -right-4 w-72 xl:w-[400px] h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-72 xl:w-[400px] h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    {children}
  </div>


  )
}

export default AnimatedBlob
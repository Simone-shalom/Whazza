import Image from "next/image"
import { CardWrapper } from "./animations/cardWrapper"



const LeaderboardsAuth = () => {
  return (
    <CardWrapper>
    <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 ">
        <Image src='/images/clip_image002_thumb.png' alt="" width={200} height={200} 
          className="rounded-xl hover:rotate-0 rotate-180 transition duration-500 hover:scale-125 cursor-pointer"/>
        <Image src='/images/clip_image002_thumb.png' alt="" width={200} height={200}
          className="rounded-xl hover:rotate-0 rotate-180 transition duration-500 hover:scale-125 cursor-pointer"/>
        <Image src='/images/clip_image002_thumb.png' alt="" width={200} height={200} 
          className="rounded-xl hidden lg:block hover:rotate-0 rotate-180 transition duration-500 hover:scale-125 cursor-pointer"/>
        <Image src='/images/clip_image002_thumb.png' alt="" width={200} height={200} 
          className="rounded-xl hidden xl:block hover:rotate-0 rotate-180 transition duration-500 hover:scale-125 cursor-pointer"/>
    </div>
    </CardWrapper>
  )
}

export default LeaderboardsAuth
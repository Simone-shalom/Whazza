
import Image from "next/image"
import { CardWrapper } from "./animations/cardWrapper"



const RelatedEvents = () => {
  return (
    <CardWrapper>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 pt-32">
        <Image src='/images/nikeurn.png' alt="" width={200} height={200} 
          className="rounded-xl hover:rotate-0 rotate-180 transition duration-500 hover:scale-150 cursor-pointer"/>
        <Image src='/images/nikeurn.png' alt="" width={200} height={200}
          className="rounded-xl hover:rotate-0 rotate-180 transition duration-500 hover:scale-150 cursor-pointer"/>
        <Image src='/images/nikeurn.png' alt="" width={200} height={200} 
          className="rounded-xl hidden lg:block hover:rotate-0 rotate-180 transition duration-500 hover:scale-150 cursor-pointer"/>
        <Image src='/images/nikeurn.png' alt="" width={200} height={200} 
          className="rounded-xl hidden xl:block hover:rotate-0 rotate-180 transition duration-500 hover:scale-150 cursor-pointer"/>
    </div>
    </CardWrapper>
  )
}

export default RelatedEvents
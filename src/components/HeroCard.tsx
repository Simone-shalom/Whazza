import Image from "next/image"
import AnimatedBlob from "./AnimatedBlob"


interface HeroCardProps {
    src: string
    right?: boolean
}

export const HeroCard = ({src, right}: HeroCardProps) => {

  return (
    <>
    {right ? (
        <div className="hidden xl:block absolute right-12 top-64 overflow-x-clip">
        <AnimatedBlob>
          <div>
          <Image src={src} alt="" width={250} height={200}/>
          </div>
        </AnimatedBlob>
        </div>
    ): (
        <div className="hidden xl:block absolute left-12 top-64 overflow-x-clip">
        <AnimatedBlob>
          <div>
          <Image src={src} alt="" width={250} height={200}/>
          </div>
        </AnimatedBlob>
        </div>
    ) }
    </>
  )
}

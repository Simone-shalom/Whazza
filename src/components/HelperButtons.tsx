import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"


const HelperButtons = () => {
  return (
    <div className="flex flex-col items-center justify-center space-x-3 pt-3">
        <h1 className="text-2xl font-semibold pb-3">
            Free resources
        </h1>
        <div className="flex">
            <Link href='https://unsplash.com/' target="_blank">
                <Button variant='link'>
                    Images
                </Button>
            </Link>

            <Link href='https://chat.openai.com/' target="_blank">
                <Button variant='link'>
                    OpenAi
                </Button>
            </Link>
        </div>
        <Image src='/images/nikeurn.png' alt="event image tempel" width={100} height={200}/>
    </div>
  )
}

export default HelperButtons
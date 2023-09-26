import { mustBeLoggedIn } from "@/lib/auth"
import CreateEventClient from "./components/CreateEventClient"
import Container from "@/components/Container"
import Footer from "@/components/Footer"


const CreateEvent = async() => {

  await mustBeLoggedIn()

  return (
    <Container>
        <div className=' pt-10 min-h-screen '>
          <div className="flex justify-center items-center pt-32">
          <CreateEventClient />
          </div>
            <Footer />
        </div>
      </Container>
  )
}

export default CreateEvent
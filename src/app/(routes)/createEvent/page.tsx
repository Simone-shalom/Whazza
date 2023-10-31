import { mustBeLoggedIn } from "@/lib/auth"
import CreateEventClient from "./components/CreateEventClient"
import Container from "@/components/Container"
import Footer from "@/components/Footer"
import getNewEvents from "@/actions/getNewEvents"
import EventsDisplay from "@/components/EventsDisplay"
import HelperButtons from "@/components/HelperButtons"


const CreateEvent = async() => {

  await mustBeLoggedIn()
  
  const events = await getNewEvents()

  // Extract the first event from the events array
  const relatedEvent = events.length > 1 ? events.slice(0,1) : events;


  return (
    <Container>
        <div className=' pt-10 min-h-screen '>

          <div className="hidden lg:block absolute z-10 -space-x-3 ">
            <h1 className="text-2xl font-semibold pt-32 ">
              Event Example 
            </h1>
          <EventsDisplay events={relatedEvent} usersCount={0} landing/>
          </div>

          <div className="flex justify-center items-center pt-32 pb-10 z-20 relative">
          <CreateEventClient />
          </div>

          <div className="hidden lg:flex absolute top-72 right-20 xl:right-32  items-center justify-center z-20">
          <HelperButtons />
          </div>
            <Footer />
        </div>
      </Container>
  )
}

export default CreateEvent
'use client'

import { Event } from "@prisma/client"
import EventsCard from "./EventsCard"
import { useState } from "react"
import useDebounce from "@/hooks/use-debounce"
import { Input } from "./ui/input"
import Empty from "./Loader"
import Loader from "./Loader"

interface EventsDisplayProps {
    events: Event[]
    usersCount: number | null
    landing? :boolean
}

const EventsDisplay = ({events, usersCount, landing}: EventsDisplayProps) => {

   // state variable for the search query
   const [searchQuery, setSearchQuery] = useState('');

    // useDebounce hook
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

   // Step 2: Filter events based on the search query
  const filteredEvents = events.filter((event) =>
  event.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
);


  return (
    <div>
       {/* search input */}
       {landing ? null : (
        <div className="pt-5 text-center items-center justify-center flex sm:px-16 md:mx-20 lg:px-40 xl:px-64 2xl:px-96">
          <Input 
           className=" text-center"
           type="text"
           placeholder="Search by name"
           value={searchQuery}
           onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

       )}
      {filteredEvents.length === 0 ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 
          xl:grid-cols-4 2xl:grid-cols-5 gap-12 pt-10">
          {filteredEvents.map((event) => (
            <EventsCard key={event.id} data={event} eventBlur usersCount={usersCount} 
            />
          ))}
      </div>
      )}
    </div>
  )
}

export default EventsDisplay
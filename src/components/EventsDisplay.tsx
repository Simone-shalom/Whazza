'use client'

import { Event } from "@prisma/client"
import EventsCard from "./EventsCard"

interface EventsDisplayProps {
    events: Event[]
}

const EventsDisplay = ({events}: EventsDisplayProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        xl:grid-cols-4 gap-16 pt-32">
        {events.map((event) => (
          <EventsCard key={event.id} data={event}/> 
        ))}
    </div>
  )
}

export default EventsDisplay
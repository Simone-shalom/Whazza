'use client'

import { Event } from "@prisma/client"
import EventsCard from "./EventsCard"

interface EventsDisplayProps {
    events: Event[]
    usersCount: number 
}

const EventsDisplay = ({events, usersCount}: EventsDisplayProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 
        xl:grid-cols-4 2xl:grid-cols-5 gap-12 pt-10">
        {events.map((event) => (
          <EventsCard key={event.id} data={event} eventBlur usersCount={usersCount} 
            /> 
        ))}
    </div>
  )
}

export default EventsDisplay
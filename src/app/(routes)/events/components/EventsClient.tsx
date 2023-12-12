"use client";

import Container from "@/components/Container";
import EventsDisplay from "@/components/EventsDisplay";
import { InitialModal } from "@/components/modals/EventModal2";
import { Button } from "@/components/ui/button";
import { useEventsModal2 } from "@/hooks/use-events-modal2";
import { Event, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface EventsClientProps {
  events: Event[];
  usersCount: number | null;
  hasSub: boolean;
  currentUser: User | null;
}

const EventsClient = ({
  events,
  usersCount,
  hasSub,
  currentUser,
}: EventsClientProps) => {
  const router = useRouter();
  const eventModal = useEventsModal2();

  const onCreateEvent = () => {
    if (currentUser) {
      eventModal.onOpen();
    } else {
      toast.error("Only subscribed users can create events");
    }
  };

  return (
    <Container>
      <div
        data-testid="events-display"
        className="flex flex-col items-center justify-center "
      >
        <Button className="text-xl font-semibold  pb-2" onClick={onCreateEvent}>
          Create an Event
        </Button>
        <InitialModal />
        <h1 className="text-black text-4xl font-semibold pt-10">
          All available events
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center pb-20">
        <EventsDisplay events={events} usersCount={usersCount} />
      </div>
    </Container>
  );
};

export default EventsClient;

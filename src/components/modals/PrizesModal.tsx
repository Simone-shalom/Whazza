"use client";


import { useEffect, useState } from "react";
import 'react-time-picker/dist/TimePicker.css';
import { Button } from "@/components/ui/button";
import {useRouter } from "next/navigation";
import Modal from "./Modal";
import toast from "react-hot-toast";
import { usePrizesModal } from "@/hooks/use-prizes-modal";
import UserPoints from "../UserPoints";
import badges from "@/lib/badges";
import Image from "next/image";
import { Separator } from "../ui/separator";
import axios from "axios";
import { ScrollArea } from "../ui/scroll-area";

interface PrizesModalProps {
  userPoints: number | null
}
type Badge = {
  name: string;
  src: string;
  points: number;
};


export const PrizesModal = ({userPoints}: PrizesModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const prizesModal = usePrizesModal()
  const [loading, setLoading] = useState(false)
  const [selBadge, setSelBadge] = useState<Badge | null>(null)

  const router = useRouter();

  console.log(userPoints)

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const onSubmit = async (selBadge :Badge) => {

    if(!userPoints){
      return
    }
    if (!selBadge || userPoints < selBadge.points) {
      // Don't submit if no badge is selected or user points are insufficient
      return;
    }
    try {
     // await axios.post(`/api/leaderboard/`, {badge: selBadge});
      console.log(selBadge)

    //   prizesModal.onClose()
    //   router.refresh()
    //   toast.success("Leaderboard joined successfully")
    } catch (error) {
      console.log(error);
      toast.error('something went wrong')
    }
  }

  if (!isMounted) {
    return null;
  }

  const handleBadgeClick = (badge: Badge) => {
    setSelBadge(badge);
  };

  let bodyContent = (
    <div 
      className="space-y-6 flex flex-col w-[500px]">
    <div className="flex items-center justify-center">
    </div>
    {userPoints ? (
      <ScrollArea className="text-center h-[320px]">
        <div className="flex flex-col items-center gap-4 justify-center">
          {badges.map((badge) => (
            <div 
              onClick={() => handleBadgeClick(badge)}
              key={badge.name} className={`flex flex-col items-center justify-center relative hover:scale-110
               transition duration-500 opacity-70 hover:opacity-100 cursor-pointer focus:opacity-100
               ${
                selBadge === badge ? 'opacity-100' : 'opacity-70'
              }
              ${userPoints < badge.points ? 'opacity-50 cursor-not-allowed hover:opacity-50 focus:opacity-50' : ''}
              `}>
              <p className="text-lg w-[200px]">
                {badge.name}
              </p>
              <Image src={badge.src} width={100} height={100} alt="badge"/>
              <p className="absolute top-16 right-0 text-lg font-bold">
                {badge.points}
              </p>
              <Separator className="border border-black"/>
          
            </div>
          ))}
        </div>
      </ScrollArea>
    ): (
      <div className="text-center">
        <p>
          Join events to became legend
        </p>
      </div>
    )}
      <div>
        <UserPoints userPoints={userPoints}/>
      </div>

        <div className="flex items-center justify-center">
        <Button 
          onClick={(event) => {
            event.preventDefault(); // Prevent the default behavior of the button
            if (selBadge !== null) {
              onSubmit(selBadge); // Pass the selected badge to the onSubmit function
            }
          }}
          size='lg' disabled={loading} 
              className="hover:scale-105 transition hover:opacity-80 w-1/2">
              Collect
        </Button>
        </div>
    </div>

   
  )

  return (
      <Modal disabled={loading} isOpen={prizesModal.isOpen}
        onClose={prizesModal.onClose} body={bodyContent} title="Get prizes"
          />
  )
}
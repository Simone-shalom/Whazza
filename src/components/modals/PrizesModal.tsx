"use client";


import { useEffect, useState } from "react";
import 'react-time-picker/dist/TimePicker.css';
import { Button } from "@/components/ui/button";
import {useRouter } from "next/navigation";
import Modal from "./Modal";
import toast from "react-hot-toast";
import { usePrizesModal } from "@/hooks/use-prizes-modal";
import UserPoints from "../UserPoints";
import Image from "next/image";
import { Separator } from "../ui/separator";
import axios from "axios";
import { ScrollArea } from "../ui/scroll-area";
import { X } from "lucide-react";
import { ExtendedBadge } from "../BadgesCard";

interface PrizesModalProps {
  userPoints: number | null
  badges: Badge[]
  userBadges: ExtendedBadge[]
}
export type Badge = {
  name: string;
  src: string;
  points: number;
};


export const PrizesModal = ({userPoints, badges ,userBadges}: PrizesModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const prizesModal = usePrizesModal()
  const [loading, setLoading] = useState(false)
  const [selBadge, setSelBadge] = useState<Badge| null>(null)


  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);


  // Filter out not taken badges
const collectedBadges = badges.filter((badge) => {
  return userBadges.some((userBadge) => userBadge.name === badge.name);
});


const handleBadgeClick = (badge: Badge) => {
  if (userBadges.some((userBadge) => userBadge.name === badge.name)) {
    toast.error("You've already collected this badge");
  } else {
    setSelBadge(badge);
  }
};


  const onSubmit = async (selBadge :Badge) => {

    if(!userPoints){
      return
    }
    if (!selBadge || userPoints < selBadge.points) {
      // Don't submit if no badge is selected or user points are insufficient
      return;
    }
    try {
      
      await axios.post(`/api/badges/`, {badge: selBadge});

      prizesModal.onClose()
      router.refresh()
      toast.success("Badge collected successfully")
    } catch (error) {
      console.log(error);
      toast.error('something went wrong')
    }
  }

  if (!isMounted) {
    return null;
  }

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
               transition duration-500 hover:opacity-100 focus:opacity-100
               ${
                selBadge === badge ? 'opacity-100 scale-110' : 'opacity-70'
              }
              ${userPoints < badge.points ? 'opacity-50 cursor-not-allowed hover:opacity-50 focus:opacity-50' : 'cursor-pointer'}
              `}>
                {collectedBadges.includes(badge) && (
                   <div className="absolute top-0 right-0 text-red-500 text-2xl mr-2 mt-2">
                   <X size={32}/>
                 </div>
                )}
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
      <div className="flex items-center justify-center">
        <UserPoints userPoints={userPoints}/>
      </div>

        <div className="flex items-center justify-center">
        <Button 
          onClick={(event) => {
            event.preventDefault(); 
            if (selBadge !== null) {
              onSubmit(selBadge); 
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
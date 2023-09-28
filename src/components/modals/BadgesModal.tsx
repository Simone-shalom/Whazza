"use client";


import { useEffect, useState } from "react";
import 'react-time-picker/dist/TimePicker.css';
import { Button } from "@/components/ui/button";
import {useRouter } from "next/navigation";
import Modal from "./Modal";
import toast from "react-hot-toast";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { useBadgesModal } from "@/hooks/use-badges-modal";

interface BadgesModalProps {
  badges: Badge[]
}
export type Badge = {
  name: string;
  src: string;
  points: number;
} 


export const BadgesModal = ({badges}: BadgesModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const badgesModal = useBadgesModal()
  const [loading, setLoading] = useState(false)
  const [selBadge, setSelBadge] = useState<Badge | null>(null)

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const onSubmit = async (selBadge :Badge) => {

  
    if (!selBadge) {
      // Don't submit if no badge is selected or user points are insufficient
      return;
    }
    try {
      // await axios.post(`/api/badges/`, {badge: selBadge});
      console.log(selBadge)

      badgesModal.onClose()
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

  const handleBadgeClick = (badge: Badge) => {
    setSelBadge(badge);
  };

  let bodyContent = (
    <div 
      className="space-y-6 flex flex-col w-[500px]">
    <div className="flex items-center justify-center">
    </div>
    {badges ? (
      <ScrollArea className="text-center h-[320px]">
        <div className="flex flex-col items-center gap-4 justify-center">
          {badges.map((badge) => (
            <div 
              onClick={() => handleBadgeClick(badge)}
              key={badge.name} className={`flex flex-col items-center justify-center cursor-pointer relative hover:scale-110
               transition duration-500 hover:opacity-100 focus:opacity-100
               ${
                selBadge === badge ? 'opacity-100 scale-110' : 'opacity-70'
              }
              `}>
              <p className="text-lg w-[200px]">
                {badge.name}
              </p>
              <Image src={badge.src} width={100} height={100} alt="badge"/>
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
        <Button 
          onClick={(event) => {
            event.preventDefault(); 
            if (selBadge !== null) {
              onSubmit(selBadge); 
            }
          }}
          size='lg' disabled={loading} 
              className="hover:scale-105 transition hover:opacity-80 w-1/2">
              Select
        </Button>
        </div>
    </div>

   
  )

  return (
      <Modal disabled={loading} isOpen={badgesModal.isOpen}
        onClose={badgesModal.onClose} body={bodyContent} title="Your badges"
          />
  )
}
"use client";


import { useEffect, useState } from "react";
import 'react-time-picker/dist/TimePicker.css';
import {useRouter } from "next/navigation";
import Modal from "./Modal";
import toast from "react-hot-toast";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { useBadgesModal } from "@/hooks/use-badges-modal";
import useBadgeStore from "@/hooks/use-badges-store";
import { Badge } from "@prisma/client";
import { Check } from "lucide-react";

interface BadgesModalProps {
  badges: Badge[]
}


export const BadgesModal = ({badges}: BadgesModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const badgesModal = useBadgesModal()
  const [loading, setLoading] = useState(false)

  const selectedBadge = useBadgeStore((state) => state.selectedBadge); // Get the selected badge from the global state
  const setSelectedBadge = useBadgeStore((state) => state.setSelectedBadge); // Function to update the selected badge

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);

     // Check if there's a selected badge in local storage
  const storedBadge = localStorage.getItem('selectedBadge');
  if (storedBadge) {
    setSelectedBadge(JSON.parse(storedBadge));
  }

  }, [setSelectedBadge]);


  if (!isMounted) {
    return null;
  }
  console.log(selectedBadge);

  const handleBadgeClick = (badge: Badge) => {
    if (selectedBadge === badge) {
      // The clicked badge is already selected, so deselect it.
      setSelectedBadge(null);
    } else {
      // Select the clicked badge.
      setSelectedBadge(badge);
    }
     // Store the selected badge in local storage
      toast.success("Badge selected")
      router.refresh()
  localStorage.setItem('selectedBadge', JSON.stringify(badge));
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
                selectedBadge === badge ? 'opacity-100 scale-110' : 'opacity-70'
              }
              `}>
              <p className="text-lg w-[200px]">
                {badge.name}
              </p>
              {selectedBadge?.name === badge.name && (
                <div className="absolute top-0 right-0 text-red-500 text-2xl mr-2 mt-2">
                  <Check />
                </div>
              )}
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
    </div>

   
  )

  return (
      <Modal disabled={loading} isOpen={badgesModal.isOpen}
        onClose={badgesModal.onClose} body={bodyContent} title="Your badges"
          />
  )
}
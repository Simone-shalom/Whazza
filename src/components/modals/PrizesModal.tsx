"use client";


import { useEffect, useState } from "react";
import 'react-time-picker/dist/TimePicker.css';
import { Button } from "@/components/ui/button";
import {useRouter } from "next/navigation";
import Modal from "./Modal";
import toast from "react-hot-toast";
import { usePrizesModal } from "@/hooks/use-prizes-modal";
import UserPoints from "../UserPoints";

interface PrizesModalProps {
  userPoints: number | null
}


export const PrizesModal = ({userPoints}: PrizesModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const prizesModal = usePrizesModal()
  const [loading, setLoading] = useState(false)

  const router = useRouter();

  console.log(userPoints)

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const onSubmit = async () => {

    try {
    //   await axios.post(`/api/leaderboard/`, values);
      console.log(userPoints)

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

  let bodyContent = (
    <div 
      className="space-y-6 flex flex-col w-[320px]">
    <div className="flex items-center justify-center">
    </div>
    {userPoints ? (
      <div className="text-center">
        <p className="text-2xl font-semibold">
        You are Legend
        </p>
        <p>
        </p>
      </div>
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
          onClick={onSubmit}
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
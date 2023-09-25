"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import 'react-time-picker/dist/TimePicker.css';

import {
  Form,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {useParams, useRouter } from "next/navigation";
import Modal from "./Modal";
import toast from "react-hot-toast";
import { usePrizesModal } from "@/hooks/use-prizes-modal";
import UserPoints from "../UserPoints";

interface PrizesModalProps {
  userPoints: number | null
}


const formSchema = z.object({
  time: z.string().min(1, {
    message: "add the time"
  }),
  distance: z.string(),
  amount: z.string(),
});


export const PrizesModal = ({userPoints}: PrizesModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const prizesModal = usePrizesModal()

  const router = useRouter();

  console.log(userPoints)

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      time: '',
      distance: '',
      amount: '',
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)

    try {
    //   await axios.post(`/api/leaderboard/`, values);


    //   form.reset();
    //   prizesModal.onClose()
    //   router.refresh()
    //   toast.success("Leaderboard joined successfully")
    console.log(values)
    } catch (error) {
      console.log(error);
      toast.error('something went wrong')
    }
  }

  if (!isMounted) {
    return null;
  }

  let bodyContent = (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} 
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
          onClick={()=> toast.error('prizes available soon')}
          size='lg' disabled={isLoading} 
              className="hover:scale-105 transition hover:opacity-80 w-1/2">
              Collect
        </Button>
        </div>
    </form>
   </Form>
  )

  return (
      <Modal disabled={isLoading} isOpen={prizesModal.isOpen}
        onClose={prizesModal.onClose} body={bodyContent} title="Get prizes"
          />
  )
}
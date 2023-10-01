"use client";

import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import 'react-time-picker/dist/TimePicker.css';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {useParams, useRouter } from "next/navigation";
import { useLeaderboardModal } from "@/hooks/use-leaderboard-modal";
import Modal from "./Modal";
import toast from "react-hot-toast";
import { Leaderboard } from "@prisma/client";
import TimePicker from "react-time-picker";


interface LeaderboardModalProps {
  leaderboard: Leaderboard;
}

const formSchema = z.object({
  time: z.string().min(1, {
    message: "add the time"
  }),
  distance: z.string(),
  amount: z.string(),
});


export const LeaderBoardModal = ({leaderboard}: LeaderboardModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const leaderBoardModal = useLeaderboardModal()
  const [loading,setIsLoading] = useState(false);

  const router = useRouter();


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

    try {
      setIsLoading(true)

      const response = await axios.post(`/api/leaderboard/${leaderboard.id}`, values);

      if (response.status === 200) {
        form.reset();
      leaderBoardModal.onClose()
      router.refresh()
      toast.success("Leaderboard joined successfully")
      }

    } catch (error: any) {

      if (error.response && error.response.status === 429) {
        toast.error('You have just joined the event');
    } else {
      // Handle other errors if necessary
      toast.error('Something went wrong');
    }
  } finally {
    setIsLoading(false)
  }
}

  if (!isMounted) {
    return null;
  }

  let bodyContent = (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} 
      className="space-y-6 flex flex-col w-[320px]">
    <div className="flex items-start justify-start">
    </div>
      <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70"
              >
              </FormLabel>
              <FormControl>
                {/* <Input
                  disabled={isLoading}     type="time"
                  min="00:00"
                  max="59:59"
                  step="60"
                  placeholder="00:00"
                  pattern="[0-5][0-9]:[0-5][0-9]"
                  className="bg-zinc-300/50 border-b focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                  
                  {...field}
                /> */}
                <div className='flex items-center justify-start'>
                <p className="font-semibold  mr-3">Your time</p>
                <TimePicker value={field.value} onChange={field.onChange}
                  format="mm:ss" disableClock={true} maxDetail="second"/>
                </div>
              </FormControl>
              
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="distance"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70"
              >
                Distance <span>KM</span> - optional
              </FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading} type="number"
                  className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                  placeholder="Distance completed"
                  {...field}
                  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70"
              >
                Amount <span>(reps)</span> - optional
              </FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading} type="number"
                  className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                  placeholder="Reps done in a challenge"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-center">
        <Button size='lg' disabled={isLoading} 
              className="hover:scale-105 transition hover:opacity-80 w-1/2">
              join
        </Button>
        </div>
    </form>
   </Form>
  )

  return (
      <Modal disabled={isLoading} isOpen={leaderBoardModal.isOpen}
        onClose={leaderBoardModal.onClose} body={bodyContent} title="Add your result"
          />
  )
}
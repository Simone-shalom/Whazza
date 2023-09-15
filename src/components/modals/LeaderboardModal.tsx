"use client";

import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

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
import { useRouter } from "next/navigation";
import { useLeaderboardModal } from "@/hooks/use-leaderboard-modal";
import Modal from "./Modal";

const formSchema = z.object({
  time: z.string().min(1, {
    message: "Set the time"
  }),
  distance: z.string(),
  amount: z.string(),
});

export const LeaderBoardModal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const leaderBoardModal = useLeaderboardModal()

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
    console.log(values)
    // try {
    // //   await axios.post("/api/leaderboard", values);

    // //   form.reset();
    // //   router.refresh()
    // //   toast.success("Event created")
    // console.log(values)
    // } catch (error) {
    //   console.log(error);
    //   toast.error('something went wrong')
    // }
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
                Time <span>MIN</span>
              </FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading} type="number"
                  className="bg-zinc-300/50 border-b focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                  placeholder="You time for completed challenge"
                  {...field}
                />
              </FormControl>
              <FormMessage />
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
        onClose={leaderBoardModal.onClose} body={bodyContent} title="Add your result"/>
  )
}
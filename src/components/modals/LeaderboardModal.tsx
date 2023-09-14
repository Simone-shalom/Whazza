"use client";

import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
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
import { ImageUpload } from "../ImageUpload";
import toast from "react-hot-toast";
import { useLeaderboardModal } from "@/hooks/use-leaderboard-modal";

const formSchema = z.object({
 
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
      imageSrc: "",
      time: '',
      distance: '',
      amount: '',
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
    try {
    //   await axios.post("/api/leaderboard", values);

    //   form.reset();
    //   router.refresh()
    //   toast.success("Event created")
    console.log(values)
    } catch (error) {
      console.log(error);
      toast.error('something went wrong')
    }
  }

  if (!isMounted) {
    return null;
  }

  return (
    <>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-center">
          <div className="flex items-start justify-start">
          {/* <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <ImageUpload
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                /> */}
          </div>
          <Dialog  
            open={leaderBoardModal.isOpen} onOpenChange={leaderBoardModal.onClose}>
        <DialogContent className="">

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
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
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
                      Amount 
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
            </DialogContent>
            <Button disabled={isLoading}>
                            Submit
                </Button>
        </Dialog>
          </form>
         </Form>
        </>
  )
}
"use client";

import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEventsModal2 } from "@/hooks/use-events-modal2";
import toast from "react-hot-toast";
import { ImageUpload } from "../ImageUpload";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Separator } from "../ui/separator";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "name is required.",
  }),
  desc: z.string().min(1, {
    message: "Description is required.",
  }),
  imageSrc: z.string().min(1, {
    message: "image is required.",
  }),
  time: z.string(),
  distance: z.string(),
  amount: z.string(),
});

export const InitialModal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const eventsModal2 = useEventsModal2();

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageSrc: "",
      time: "",
      distance: "",
      amount: "",
      desc: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/create", values);

      form.reset();
      router.push("/events");
      router.refresh();
      toast.success("Event created");
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    } finally {
      eventsModal2.onClose();
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Dialog open={eventsModal2.isOpen} onOpenChange={eventsModal2.onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center text-2xl py-2">
              Create Event Form
            </DialogTitle>
            <Separator />
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 flex flex-col items-center"
            >
              <FormField
                control={form.control}
                name="imageSrc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase flex items-center justify-center text-xs text-center font-bold text-zinc-500 dark:text-secondary/70">
                      Image
                    </FormLabel>
                    <FormControl>
                      <ImageUpload
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Event name
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Enter event name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="desc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Description
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Enter event name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Time <span>MIN</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        type="number"
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Time for a challenge"
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
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Distance <span>KM</span> - optional
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        type="number"
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Distance to finish"
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
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Amount
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        type="number"
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Reps to complete"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={isLoading}>Create</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

'use client'

import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import {FieldValues, SubmitHandler, useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormControl,Form,  FormField, FormItem,
   FormLabel, FormMessage, FormDescription } from "../ui/form"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import { Separator } from "../ui/separator"
import { Input } from "../ui/input"
import { useEventsModal } from "@/hooks/use-events-modal"
import Modal from "./Modal"
import { ImageUpload } from "../ImageUpload"



enum STEPS  {
  CATEGORY = 0,
  IMAGES =1,
  DESC = 2,
  PRICE = 3,

}


const formSchema = z.object({
  category: z .string(),
  imageSrc: z .string(),
  price: z.string().min(1, {
    message: "Set the price"
  }),
  title: z.string().min(1, {
    message: "Title must be  added"
  }),
  desc: z.string().min(1, {
    message: "add description"
  })
})


const EventsModal = () => {

    const eventsModal = useEventsModal()
    const router = useRouter()
    const [step, setStep] = useState(STEPS.CATEGORY)

    const [isLoading, setIsLoading]= useState(false)

    const [mounted, setMounted] = useState(false)


    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
          category: '',
          imageSrc: '',
          desc: '',
          title: '',
          price: '',
      }
  })
  

    useEffect(() => {
        setMounted(true)
    },[])

    if(!mounted){
        return null
    }


    const nextStep = () => {
        setStep((value) => value +1)
    }

  
   const onSubmit:SubmitHandler<FieldValues> =(data) => {
      console.log(data)

   }

 
    let bodyContent = (
        <div className='flex flex-col gap-2 w-full h-full'>
            
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 pb-10">
                {step === STEPS.IMAGES && (
                     <FormField control={form.control} name="imageSrc"
                     render={({field}) => (
                         <FormItem className="flex flex-col items-center 
                             justify-center space-y-2">
                             <FormControl>
                                <ImageUpload value={field.value} onChange={field.onChange}/>
                             </FormControl>
                             <FormMessage/>
                         </FormItem>
                     )}/>
                )}

                {step === STEPS.CATEGORY && (
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {/*Name input form*/}
                     <FormField name="title" control={form.control}
                         render={({field}) => (
                             <FormItem className="col-span-2 md:col-span-1">
                                 <FormLabel>Name</FormLabel>
                                 <FormControl>
                                     <Input disabled={isLoading} 
                                         placeholder="Arnold Schwarzenegger"
                                         {...field}
                                     />
                                 </FormControl>
                                 <FormDescription className="text-sm">
                                     This is how your Ai companion will be named
                                 </FormDescription>
                                 <FormMessage/>
                             </FormItem>
                         )}/>
                     
                     {/*Description input form*/}
                     <FormField name="desc" control={form.control}
                         render={({field}) => (
                             <FormItem className="col-span-2 md:col-span-1">
                                 <FormLabel>Description</FormLabel>
                                 <FormControl>
                                     <Input disabled={isLoading} 
                                         placeholder='BodyBuilder CEO Arnold Classic'
                                         {...field}
                                     />
                                 </FormControl>
                                 <FormDescription>
                                     Short description of your character
                                 </FormDescription>
                                 <FormMessage/>
                             </FormItem>
                         )}/>
 
                     {/*CategoryId input form*/}
                     <FormField name="category" control={form.control}
                         render={({field}) => (
                           <FormItem>
                             <FormLabel>Category</FormLabel>
                           
                             <FormDescription>
                                 Select Category 
                             </FormDescription>
                             <FormMessage/>
                           </FormItem>  
                         )}/>

                    <Separator className="bg-primary/20"/>

                 {/*instructions input form*/}
                 <FormField name="price" control={form.control}
                        render={({field}) => (
                            <FormItem className="col-span-2 md:col-span-1">
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}/>
                 </div>
                ) }
                 {/*seed input form*/}
                <div className="w-full flex justify-center">
                    <Button onClick={nextStep}>
                        Next
                    </Button>
                    <Button size='lg' disabled={isLoading} 
                        className="hover:scale-105 transition hover:opacity-80">
                        Create
                    </Button>
                </div>
            </form>
        </Form>
        </div>
    )

  return (
    <Modal disabled={isLoading} isOpen={eventsModal.isOpen} title='Create Listing'
        onClose={eventsModal.onClose} 
        onSubmit={()=>{}} body={bodyContent} />
  )
}

export default EventsModal
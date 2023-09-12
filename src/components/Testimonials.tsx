'use client'
import Image from 'next/image'

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const Testimonialss =[
    {
        name: 'Simmons',
        avatar: 'A',
        title: 'Software Engineer',
        description: 'This is the best application i have used  the best application i have used',
        src: '/images/how-tweet-threads-one.png.twimg.1920.png'
    },
    {
        name: 'Simmons',
        avatar: 'A',
        title: 'Software Engineer',
        description: 'This is the best application i have used  the best application i have used',
        src: '/images/how-tweet-threads-one.png.twimg.1920.png'
    },
    {
        name: 'Simmons',
        avatar: 'A',
        title: 'Software Engineer',
        description: 'This is the best application i have used  the best application i have used',
        src: '/images/how-tweet-threads-one.png.twimg.1920.png'
    },
    {
        name: 'Simmons',
        avatar: 'A',
        title: 'Software Engineer',
        description: 'This is the best application i have used the best application i have used',
        src: '/images/how-tweet-threads-one.png.twimg.1920.png'
    },
]

export const Testimonials = () => {
  return (
    <div className='px-10 pb-20 pt-32'>
        <h2 className='text-center text-4xl text-black font-extrabold mb-10'>
            Testimonials
        </h2>
        <h3  className='text-center text-2xl text-black font-bold mb-10'>
            Thousands of happy users, every day
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols- lg:grid-cols-3 
            xl:grid-cols-4 gap-10 px-10 '>
            {Testimonialss.map((test) => (
                <Card key={test.name} 
                    className="bg-zinc-100/60 border-none text-black hover:opacity-80 transition
                     hover:scale-110 duration-500 cursor-pointer">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-x-2">
                            <div>
                            <div>
                                <div className="px-3 py-1 rounded-lg bg-purple-300">
                                    {test.name}
                                </div>
                            </div>
                                <p className="text-sm text-black-600">
                                    {test.title}
                                </p>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='flex flex-col items-center justify-center'>
                            <p className='pb-4'> {test.description}</p>
                            <Image src={test.src} alt='' width={200} height={100}/>
                        </div>
                        
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
  )
}
'use client'

import { useRouter } from "next/navigation"

export const Pricing = () => {


    const router = useRouter()

  return (
    <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-gray-500">Our pricing system, allowes you to choose and pay for what you do</p>
        <div className="flex mx-auto border-2 border-purple-500 rounded overflow-hidden mt-6">
          <button className="py-1 px-4 bg-purple-500 text-white focus:outline-none">Monthly</button>
        </div>
      </div>
      <div className="flex flex-wrap -m-4 xl:mx-10">
        <div className="p-4 xl:w-1/2 md:w-1/2 w-full">
          <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
            <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Join events
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Add your results
            </p>
            <p className="flex items-center text-gray-600 mb-6">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>See the leaderboards
            </p>
            <button 
                onClick={()=> router.push('/events')}
                className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Get started
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p className="text-xs text-gray-500 mt-3">Literally you probably havent heard of them jean shorts.</p>
          </div>
        </div>


        <div className="p-4 xl:w-1/2 md:w-1/2 w-full">
          <div className="h-full p-6 rounded-lg border-2 border-purple-500 flex flex-col relative overflow-hidden">
            <span className="bg-purple-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
            <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
              <span>19.99</span>
              <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
            </h1>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Create and join events
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Add your results
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>See the leaderboards
            </p>
            <p className="flex items-center text-gray-600 mb-6">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>Get prizes for top placings
            </p>
            <button 
                onClick={()=> router.push('/dashboard')}
                className="flex items-center mt-auto text-white bg-purple-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-purple-600 rounded">Start today
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p className="text-xs text-gray-500 mt-3">Literally you probably havent heard of them jean shorts.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

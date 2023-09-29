'use client'


const Scoring = () => {
  return (
       <div className="flex flex-col z-20 items-center justify-center">
                   
                    <h3 className="text-4xl font-semibold pt-3  text-orange-700">Scoring system</h3>
                    <p className="text-2xl text-gray-800 font-semibold capitalize">only the best result counts</p>
                 
                  <div className="text-2xl pt-3 ">
                    <p className="pt-1">
                    1 place in event = <span className="font-semibold">3 points</span>
                    </p>
                    <p>
                    2 place in event = <span className="font-semibold">2 points</span>
                    </p>
                    <p>
                    3 place in event = <span className="font-semibold">1 point</span>
                    </p>
                    </div>
             
              </div>
  )
}

export default Scoring
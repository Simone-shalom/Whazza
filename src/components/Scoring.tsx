'use client'


const Scoring = () => {
  return (
       <>
                   
                    <h3 className="text-2xl font-semibold pt-5">Scoring system</h3>
                    <p className="text-lg text-muted-foreground capitalize">only the best result counts</p>
                 
                  <div className="text-xl ">
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
             
              </>
  )
}

export default Scoring
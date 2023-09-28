'use client'

import { Check } from "lucide-react"

interface UserPointsProps {
    userPoints: number |null
}

const UserPoints = ({userPoints}:UserPointsProps) => {
  return (
    <div className="flex items-center justify-center bg-orange-700 rounded-md text-white px-5  ">
        <h1 className="font-semibold">
            Your points: 
        </h1>
        <p className="ml-2 font-bold text-xl rounded-full px-3 py-1 ring- ring-white">{ userPoints}</p>
        <Check size={24}/>
    </div>
  )
}

export default UserPoints
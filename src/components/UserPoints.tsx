'use client'

interface UserPointsProps {
    userPoints: number |null
}

const UserPoints = ({userPoints}:UserPointsProps) => {
  return (
    <div className="flex items-center justify-center">
        <h1 className="font-semibold text-lg">
            Your points: 
        </h1>
        <p className="ml-2 font-bold text-xl rounded-full px-3 py-1 ring-2 ring-black">{ userPoints}</p>
    </div>
  )
}

export default UserPoints
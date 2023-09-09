
import LeaderboardsAuth from "@/components/LeaderboardsAuth";
import RelatedEvents from "@/components/RelatedEvents";
import SiginBtn from "@/components/SiginBtn";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const SignIn = async() => {

  const session = await getServerSession(authOptions);

  if (session) {
     redirect('/dashboard');
  }

  return (
    <div className="flex h-screen overflow-y-hidden items-center justify-center flex-col space-y-6">
    
        <SiginBtn />
        <p className='text-center text-4xl text-black font-extrabold pt-8'>
          Our Leaderboards are waiting for you to join 
        </p>
        <p className='text-center text-3xl text-black font-semibold '>
          Special prizes every month
        </p>
        <LeaderboardsAuth />
        
    </div>
  )
}

export default SignIn
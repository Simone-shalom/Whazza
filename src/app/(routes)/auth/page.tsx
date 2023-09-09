
import AnimatedBlob from "@/components/AnimatedBlob";
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
    <div className="flex items-center justify-center ">
    
        <SiginBtn />
  
        
    </div>
  )
}

export default SignIn
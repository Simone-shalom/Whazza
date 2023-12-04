
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import { LogoComp } from "@/components/LogoComp";
import SiginBtn from "@/components/SiginBtn";
import SiginEmailBtn from "@/components/SiginEmailBtn";
import { PageWrapper } from "@/components/animations/pageWrapper";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { SparkleIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const SignIn = async() => {

  const session = await getServerSession(authOptions);

  if (session) {
     redirect('/dashboard');
  }



  return (
      <Container>
      <div className="min-h-screen">
        <PageWrapper>
            <div className="flex min-h-[800px] items-center justify-center flex-col space-y-6">
            <p className='text-center text-4xl text-black font-bold  '>
              Our Leaderboards are waiting for you to join 
            </p>
            <div className="flex">
            <p className='text-center text-3xl text-black pb-8 '>
              Special prizes every month
            </p>
            <SparkleIcon size={32}/>
            </div>
          
              <Card className="relative flex items-center justify-center bg-gradient-to-r border-black  from-purple-100 to-purple-50/50
                flex-col z-50 px-10 pt-8 pb-4 rounded-xl shadow-xl hover:shadow-2xl transition">
              <div className="text-black font-extrabold text-xl absolute right-2 top-2">
                <LogoComp />
              </div>
                <CardContent>
                  <CardTitle className='flex justify-center items-center flex-col
                    space-y-2 pb-6'>
                    <div className='flex items-center gap-x-2 font-bold text-2xl py-1'>
                    Became a member
                    </div>
                  </CardTitle>
                  {/* <CardDescription className='px-6 pb-2 text-center text-lg text-gray-500 font-semibold flex w-full justify-center items-center'>
                  Get started for free. No card required.
                  </CardDescription> */}
                  <h1 className="text-center text-xl">Test credentials</h1>
                  <div className="flex pb-5 space-x-3 ">
                  <p>
                  wellsimon89@gmail.com
                  </p>
                  <p>
                  12wellsimon89
                  </p>
                  </div>
                  <SiginBtn />
                  <SiginEmailBtn />
                  <p className="text-sm font-italic pt-1 text-black text-center">
                    First time? dont be shy, show yourself
                  </p>
                </CardContent>
              </Card>
            </div>
          </PageWrapper>
      <Footer />
    </div>
    </Container>
  )
}

export default SignIn
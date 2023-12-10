
import { AuthCard } from "@/components/AuthCard";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import { PageWrapper } from "@/components/animations/pageWrapper";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
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
        {/* <PageWrapper> */}
            <div className="flex  items-center justify-center flex-col pb-32 ">
              <AuthCard />
            </div>
          {/* </PageWrapper> */}
      <Footer />
    </div>
    </Container>
  )
}

export default SignIn
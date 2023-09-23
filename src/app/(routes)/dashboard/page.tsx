import {
  createCheckoutLink,
  createCustomerIfNull,
  generateCustomerPortalLink,
  hasSubscription,
  stripe,
} from "@/lib/stripe";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prismadb from "@/lib/prismadb";
import LogoutBtn from "@/components/LogoutBtn";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import Image from "next/image";
import { PageWrapper } from "@/components/animations/pageWrapper"
import PrizesButton from "@/components/PrizesButton";
import Scoring from "@/components/Scoring";
import getTotalPoints from "@/actions/getTotalPoints";
import UserPoints from "@/components/UserPoints";
import { PrizesModal } from "@/components/modals/PrizesModal";
import AnimatedBlob from "@/components/AnimatedBlob";


export default async function Page() {
  const session = await getServerSession(authOptions);
  const customer = await createCustomerIfNull();
  const hasSub = await hasSubscription();
  const checkoutLink = await createCheckoutLink(String(customer));
  const customerPortal = await generateCustomerPortalLink(String(customer));
  const totalPoints = await getTotalPoints()

  
  const user = await prismadb.user.findFirst({
    where: {
      email: session?.user?.email,
    },
  });


  if (hasSub) {
      await stripe.subscriptions.list({
      customer: String(user?.stripe_customer_id),
    });
    // const invoice = await stripe.invoices.retrieveUpcoming({
      // subscription: subscriptions.data.at(0)?.id,
    // });

    // current_usage = invoice.amount_due;
  }

  return (
    <div className="min-h-[75vh] ">
    <Container>
      <PageWrapper>
        <AnimatedBlob>
        <div className="flex flex-col items-center justify-center pt-10">
          <p className="text-4xl font-bold text-center"> Hello {session?.user?.name}</p>
          <Scoring />
        </div>
      </AnimatedBlob>
        <div className="flex flex-col lg:flex-row items-center pt-12">
          <main className="w-full lg:w-1/2 flex flex-col items-center">
            {hasSub ? (
              <div className="flex flex-col gap-4 items-center justify-center pb-5">
                <div className="rounded-md px-4 py-2 max-w-xl bg-emerald-400 font-medium text-sm text-white">
                  You have a subscription!
                </div>
                <Button variant="default" className="opacity-60 max-w-xl">
                  <Link href={String(customerPortal)}>Manage subscription</Link>
                </Button>
                <PrizesButton sub={hasSub}/>
              </div>
            ) : (
              <div className=" flex flex-col justify-center items-center rounded-lg pb-5 ">
                <Link
                  href={String(checkoutLink)}
                  className="font-medium text-base hover:underline pb-6"
                >
                  You have no subscription, checkout now!
                </Link>
                <PrizesButton />
              </div>
            )}
              <UserPoints userPoints={totalPoints}/>
          </main>
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
            <LogoutBtn />
          <PrizesModal userPoints={totalPoints}/>
          </div>
        </div>
      </PageWrapper>
    </Container>
    </div>
  );
}

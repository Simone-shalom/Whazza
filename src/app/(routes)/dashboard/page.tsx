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
import { PageWrapper } from "@/components/animations/pageWrapper";
import toast from "react-hot-toast";
import { usePrizesModal } from "@/hooks/use-prizes-modal";
import PrizesButton from "@/components/PrizesButton";
import { PrizesModal } from "@/components/modals/PrizesModal";
;

export default async function Page() {
  const session = await getServerSession(authOptions);
  const customer = await createCustomerIfNull();
  const hasSub = await hasSubscription();
  const checkoutLink = await createCheckoutLink(String(customer));
  const customerPortal = await generateCustomerPortalLink(String(customer));


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
    <Container>
      <PageWrapper>
      <p className="text-3xl font-semibold text-center pt-5 "> Hello {session?.user?.name}</p>
        <div className="flex flex-col lg:flex-row items-center pt-10">
          <main className="w-full lg:w-1/2 flex flex-col items-center">
            {hasSub ? (
              <div className="flex flex-col gap-4 items-center justify-center">
                <div className="rounded-md px-4 py-2 max-w-xl bg-emerald-400 font-medium text-sm text-white">
                  You have a subscription!
                </div>
                <Button variant="default" className="opacity-60 max-w-xl">
                  <Link href={String(customerPortal)}>Manage subscription</Link>
                </Button>
                <PrizesButton />
              </div>
            ) : (
              <div className=" flex flex-col justify-center items-center rounded-lg pb-5 ">
                <Link
                  href={String(checkoutLink)}
                  className="font-medium text-base hover:underline pb-6"
                >
                  You have no subscription, checkout now!
                </Link>
                <div className="flex items-center pb-5 space-x-5">
              <LogoutBtn />
              <Button 
                onClick={()=>toast.error('Prizes only for subscribed users')}
                variant="outline">Collect prizes</Button>
            </div>
              </div>
            )}
          </main>
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
            <Image
              src="/images/clip_image002_thumb.png"
              alt=""
              width={300}
              height={300}
            />
          </div>
          <PrizesModal />
        </div>
      </PageWrapper>
    </Container>
  );
}

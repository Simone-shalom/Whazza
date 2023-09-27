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
import LogoutBtn from "@/components/LogoutBtn";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { PageWrapper } from "@/components/animations/pageWrapper"
import PrizesButton from "@/components/PrizesButton";
import Scoring from "@/components/Scoring";
import getTotalPoints from "@/actions/getTotalPoints";
import UserPoints from "@/components/UserPoints";
import { PrizesModal } from "@/components/modals/PrizesModal";
import AnimatedBlob from "@/components/AnimatedBlob";
import getBadges from "@/actions/getBadges";
import getUserBadges from "@/actions/getUserBadges";
import BadgesCard, { ExtendedBadge } from "@/components/BadgesCard";


export default async function Page() {
  const session = await getServerSession(authOptions);
  const customer = await createCustomerIfNull();
  const hasSub = await hasSubscription();
  const checkoutLink = await createCheckoutLink(String(customer));
  const customerPortal = await generateCustomerPortalLink(String(customer));
  const totalPoints = await getTotalPoints()
  const badges = await getBadges()
  const userBadges = await getUserBadges()

  // Map the received data to create instances of ExtendedBadge
const extendedBadges = userBadges.map((item) => {
  return {
    id: item.id,
    userId: item.userId,
    badgeId: item.badgeId,
    name: item.badge.name,
    src: item.badge.src,
    points: item.badge.points,
  } as ExtendedBadge;
});

  return (
    <div className="min-h-[75vh]">
    <Container>
      <PageWrapper>
        <div className="flex items-center justify-center">
        <AnimatedBlob>
        <div className="flex flex-col items-center  pt-10 z-50 w-full">
          <p className="text-4xl font-bold text-center"> Hello {session?.user?.name}</p>
          <Scoring />
        </div>
      </AnimatedBlob>
      </div>
        <div className="flex flex-col lg:flex-row  pt-12">
          <main className="w-full lg:w-1/2 flex flex-col items-center">
            {hasSub ? (
              <div className="flex flex-col gap-4 items-center justify-center pb-5">
                <div className="rounded-md px-4 py-2 max-w-xl bg-orange-700 font-medium text-sm text-white">
                  You have a subscription!
                </div>
                <Button variant="secondary" className="opacity-80 max-w-xl">
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
          </main>
          <div className="w-full lg:w-1/2 flex flex-col items-center gap-4 ">
            <UserPoints userPoints={totalPoints}/>
            <Button>Choose a badge</Button>  
            <LogoutBtn />
          <PrizesModal userPoints={totalPoints} badges={badges}/>
          </div>
        </div>
        <div className="flex items-center justify-center px-5">
           <BadgesCard userBadges={extendedBadges} />
        </div>
      </PageWrapper>
    </Container>
    </div>
  );
}

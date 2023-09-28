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
import BadgesButton from "@/components/BadgesButton";
import { BadgesModal } from "@/components/modals/BadgesModal";


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
        <div className="flex flex-col md:flex-row  pt-12">
          <main className="w-full md:w-1/2 flex flex-col items-center">
            {hasSub ? (
              <div className="flex flex-col gap-4 items-center justify-center pb-5">
                <div className="rounded-md px-4 py-2 max-w-xl bg-orange-700  font-semibold text-white">
                  You have a subscription!
                </div>
                <Button variant="secondary" className="opacity-80 max-w-xl hover:scale-110 transition duration-500">
                  <Link href={String(customerPortal)}>Manage subscription</Link>
                </Button>
                <PrizesButton sub={hasSub}/>
              </div>
            ) : (
              <div className=" flex flex-col justify-center items-center rounded-lg pb-5 gap-4 ">
                 <div className="rounded-md px-4 py-2 max-w-xl bg-orange-700 opacity-70  font-semibold text-white">
                  You are on free mode!
                </div>
                <Button variant="secondary" className="opacity-90 max-w-xl hover:scale-110 transition duration-500">
                  <Link
                    href={String(checkoutLink)}
                    
                  >
                    Get subscription, checkout now!
                  </Link>
                </Button>
                <PrizesButton />
              </div>
            )}
          </main>
          <div className="w-full md:w-1/2 flex flex-col items-center gap-4 ">
            <UserPoints userPoints={totalPoints}/>
            <BadgesButton sub={hasSub}/> 
            <LogoutBtn />
          <PrizesModal userPoints={totalPoints} badges={badges} userBadges={extendedBadges}/>
          <BadgesModal badges={extendedBadges}/>
          </div>
        </div>
        <div className="flex items-center justify-center px-5 pt-10 md:pt-0">
           <BadgesCard userBadges={extendedBadges} />
        </div>
      </PageWrapper>
    </Container>
    </div>
  );
}

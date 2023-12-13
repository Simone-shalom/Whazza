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
import { PageWrapper } from "@/components/animations/pageWrapper";
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
import Image from "next/image";
import { HeroCard } from "@/components/HeroCard";
import { Card } from "@/components/ui/card";
import { DashboardInfo } from "@/components/DashboardInfo";
import { DashboardLinks } from "@/components/DashboardLinks";
import { DashboardBadges } from "@/components/DashboardBadges";

export default async function Page() {
  const session = await getServerSession(authOptions);
  const customer = await createCustomerIfNull();
  const hasSub = await hasSubscription();
  const checkoutLink = await createCheckoutLink(String(customer));
  const customerPortal = await generateCustomerPortalLink(String(customer));
  const totalPoints = await getTotalPoints();
  const badges = await getBadges();
  const userBadges = await getUserBadges();

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
      <HeroCard src="/images/Raoul-Paoli.png" />

      <HeroCard src="/images/sam-uy-futbolista-soccer-player.png" right />
      <Container>
        <PageWrapper>
          <div className="flex flex-col space-y-8 px-5 sm:px-10 md:px-0 xl:px-12 sm:mx-10">
            <DashboardInfo />
            <DashboardLinks
              hasSub={hasSub}
              checkoutLink={checkoutLink}
              customerPortal={customerPortal}
              totalPoints={totalPoints}
              extendedBadges={extendedBadges}
              badges={badges}
            />
            <DashboardBadges extendedBadges={extendedBadges} />
          </div>
        </PageWrapper>
      </Container>
    </div>
  );
}

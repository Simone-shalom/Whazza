import {
  createCheckoutLink,
  createCustomerIfNull,
  generateCustomerPortalLink,
  hasSubscription,
  stripe,
} from "@/lib/stripe";
import Container from "@/components/Container";
import { PageWrapper } from "@/components/animations/pageWrapper";
import getTotalPoints from "@/actions/getTotalPoints";
import getBadges from "@/actions/getBadges";
import getUserBadges from "@/actions/getUserBadges";
import { ExtendedBadge } from "@/components/BadgesCard";
import { HeroCard } from "@/components/HeroCard";
import { DashboardInfo } from "@/components/DashboardInfo";
import { DashboardLinks } from "@/components/DashboardLinks";
import { DashboardBadges } from "@/components/DashboardBadges";
import { DashboardHero } from "@/components/DashboardHero";

export default async function Page() {
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
    <Container>
      <PageWrapper>
        <div className="flex flex-col space-y-4   ">
          <div className="flex flex-col w-full">
            <DashboardHero userPoints={totalPoints} />
            <div className="flex flex-col lg:flex-row w-full gap-4">
              <DashboardInfo />

              <DashboardLinks
                hasSub={hasSub}
                checkoutLink={checkoutLink}
                customerPortal={customerPortal}
                totalPoints={totalPoints}
                extendedBadges={extendedBadges}
                badges={badges}
              />
            </div>
          </div>
          <DashboardBadges extendedBadges={extendedBadges} />
        </div>
      </PageWrapper>
    </Container>
  );
}

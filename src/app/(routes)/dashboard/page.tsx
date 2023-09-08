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
    <main>
       <LogoutBtn />
      {hasSub ? (
        <>
          <div className="flex flex-col gap-4">
            <div className="rounded-md px-4 py-2 bg-emerald-400 font-medium text-sm text-white">
              You have a subscription!
            </div>

            <div className="divide-y divide-zinc-200 border border-zinc-200 rounded-md">
              <p className="text-sm text-black px-6 py-4 font-medium">
                API Key
              </p>
              <p className="text-sm font-mono text-zinc-800 px-6 py-4">
                {user?.api_key}
              </p>
            </div>
            <Button variant='secondary'>
              <Link href={String(customerPortal)}>
                Manage subscription
              </Link>
              </Button>
          </div>
        </>
      ) : (
        <>
          <div className="min-h-[60vh] grid place-items-center rounded-lg px-6 py-10 bg-slate-100">
            <Link
              href={String(checkoutLink)}
              className="font-medium text-base hover:underline"
            >
              You have no subscription, checkout now!
            </Link>
          </div>
        </>
      )}
    </main>
  );
}

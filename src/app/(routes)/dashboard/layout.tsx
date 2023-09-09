
import Footer from "@/components/Footer";
import { mustBeLoggedIn } from "@/lib/auth";
import { createCheckoutLink, createCustomerIfNull, hasSubscription } from "@/lib/stripe";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await mustBeLoggedIn();
  const customer = await createCustomerIfNull();

  return (
    <div className="pt-20 min-h-screen ">
      <div className="max-w-5xl m-auto w-full px-4">{children}</div>
      <Footer />
    </div>
  );
}

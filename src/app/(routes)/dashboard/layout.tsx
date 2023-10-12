
import Footer from "@/components/Footer";
import { mustBeLoggedIn } from "@/lib/auth";
import { createCustomerIfNull,} from "@/lib/stripe";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await mustBeLoggedIn();
  const customer = await createCustomerIfNull();

  return (
    <div className="pt-20 min-h-screen overflow-x-clip">
      <div className="max-w-5xl m-auto w-full px-4">{children}</div>
      <Footer />
    </div>
  );
}

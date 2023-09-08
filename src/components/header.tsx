import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Link from "next/link";


export async function Header() {

  const session = await getServerSession(authOptions)

    const generateDashboardLink = () => {
      const callbackUrl = '/dashboard'; // Specify your desired dashboard URL
      const customSignInPage = '/auth'; // Path to your custom sign-in page
  
      if(session){
        return callbackUrl
      } else {
          // Generate the link to your custom sign-in page with callbackUrl
        return `${customSignInPage}?callbackUrl=${encodeURIComponent(callbackUrl)}`;
      }
    };

  return (
    <nav className="max-w-5xl m-auto w-full px-4">
      <div className="flex items-center gap-8 justify-between py-4">
        <Link
          href={"/"}
          className="text-2xl font-semibold text-black hover:opacity-90"
        >
          Logo
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/events"
            className="font-medium text-sm text-black hover:opacity-90"
          >
            Events
          </Link>
          <Link
            href="/pricing"
            className="font-medium text-sm text-black hover:opacity-90"
          >
            Pricing
          </Link>
          <Link
            href={generateDashboardLink()}
            className="font-medium text-sm text-white bg-black px-4 py-2 rounded-lg hover:opacity-90"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}

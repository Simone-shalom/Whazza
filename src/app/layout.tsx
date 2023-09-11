import { NextAuthProvider } from "@/providers/SessionProvidert";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import ToasterProvider from "@/providers/ToasterProvider";
import EventsModal from "@/components/modals/EventModal";

const montse = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Whazza",
  description: "Your sports events app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montse.className}>
        <NextAuthProvider>
        <ToasterProvider />
        <EventsModal />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}

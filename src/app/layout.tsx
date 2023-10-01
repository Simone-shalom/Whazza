import { NextAuthProvider } from "@/providers/SessionProvidert";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import ToasterProvider from "@/providers/ToasterProvider";

const montse = Montserrat({
  subsets: ["latin"],
  weight:  "500"
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
        
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}

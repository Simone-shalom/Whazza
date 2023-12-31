import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter";
import prismadb from "@/lib/prismadb";
import EmailProvider from "next-auth/providers/email";


export const authOptions = {
    adapter: PrismaAdapter(prismadb),
    providers: [
        GoogleProvider({
            clientId: String(process.env.GOOGLE_ID),
            clientSecret: String(process.env.GOOGLE_SECRET),
        }),
    ],
    debug: process.env.NODE_ENV === 'development',
    pages: {
        signIn: '/auth'
    },
    session: {
        strategy: 'jwt',
      },
    secret: process.env.NEXTAUTH_SECRET
} as AuthOptions

export default NextAuth(authOptions)
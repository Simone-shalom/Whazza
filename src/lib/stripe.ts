import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import Stripe from 'stripe';

import { randomUUID } from 'crypto';
import prismadb from './prismadb';



export const stripe = new Stripe(String(process.env.STRIPE_SECRET), {
    apiVersion: '2022-11-15',
});

export async function hasSubscription() {
    const session = await getServerSession(authOptions);

    if (session) {
        const user = await prismadb.user.findFirst({ where: { email: session.user?.email } });

        const subscriptions = await stripe.subscriptions.list({
            customer: String(user?.stripe_customer_id)
        })

        return subscriptions.data.length > 0;
    }

    return false;
}

export async function createCheckoutLink(customer: string) {
    const checkout = await stripe.checkout.sessions.create({
        success_url: "/dashboard",
        cancel_url: "/dashboard",
        customer: customer,
        line_items: [
            {
                price: 'price_1No3BtFIOIxMGEHOD3a29HSG',
                quantity: 1
            },
        ],
        mode: "subscription"
    })

    return checkout.url;
}

// Generate Customer portal
export async function generateCustomerPortalLink(customerId: string) {
    try {
        
        const portalSession = await stripe.billingPortal.sessions.create({
            customer: customerId,
            return_url: "/dashboard", 
        });

        console.log()

        return portalSession.url;
    } catch (error) {
        console.log(error)
        return undefined;
    }
}

export async function createCustomerIfNull() {
    const session = await getServerSession(authOptions);

    if (session) {
        const user = await prismadb.user.findFirst({ where: { email: session.user?.email } });

        if (!user?.api_key) {
            await prismadb.user.update({
                where: {
                    id: user?.id
                },
                data: {
                    api_key: "secret_" + randomUUID()
                }
            })
        }
        if (!user?.stripe_customer_id) {
            const customer = await stripe.customers.create({
                email: String(user?.email)
            })

            await prismadb.user.update({
                where: {
                    id: user?.id
                },
                data: {
                    stripe_customer_id: customer.id
                }
            })
        }
        const user2 = await prismadb.user.findFirst({ where: { email: session.user?.email } });
        return user2?.stripe_customer_id;
    }

}
"use server";

import { CartProduct } from "@/providers/cart";
import Stripe from "stripe";

export async function createCheckout(products: CartProduct[]) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  });

  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    cancel_url: "http://localhost:3000/",
    success_url: "http://localhost:3000/",
    line_items: products.map((product) => {
      return {
        price_data: {
          currency: "BRL",
          product_data: {
            name: product.name,
            description: product.description,
            images: product.imageUrls,
          },
          unit_amount: product.totalPrice * 100,
        },
        quantity: product.quantity,
      };
    }),
  });

  return checkout;
}

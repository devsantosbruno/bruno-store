"use client";

import { Product } from "@prisma/client";
import { ReactNode, createContext } from "react";

interface CartProduct extends Product {
  quantity: number;
}

interface ICartContext {
  basePrice: number;
  products: Product[];
  totalDiscount: number;
  totalPrice: number;
}

const CartContext = createContext<ICartContext>({
  basePrice: 0,
  products: [],
  totalDiscount: 0,
  totalPrice: 0,
});

export function CartProvider({ children }: { children: ReactNode }) {
  return (
    <CartContext.Provider
      value={{ basePrice: 0, products: [], totalDiscount: 0, totalPrice: 0 }}
    >
      {children}
    </CartContext.Provider>
  );
}

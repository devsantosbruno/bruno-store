"use client";

import { Discount } from "@/components/Discount";
import { Button } from "@/components/ui/button";
import { ProductWithTotalPrice, normalizeValue } from "@/helpers/product";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useState } from "react";

interface InfoProps {
  product: Pick<
    ProductWithTotalPrice,
    "basePrice" | "description" | "discountPercentage" | "name" | "totalPrice"
  >;
}

export function Info({ product }: InfoProps) {
  const [quantity, setQuantity] = useState(1);

  const hasDiscount = product.discountPercentage > 0;

  function handleDecreaseQuantity() {
    if (quantity === 1) {
      return;
    }
    setQuantity((prev) => prev - 1);
  }

  function handleIncreaseQuantity() {
    setQuantity((prev) => prev + 1);
  }

  return (
    <div className="flex flex-col">
      <h1 className="mb-1 text-lg">{product.name}</h1>

      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold">
          R$ {normalizeValue(product.totalPrice)}
        </h2>
        {hasDiscount && (
          <Discount
            title={`${product.discountPercentage}%`}
            className="absolute left-3 top-3"
          />
        )}
      </div>

      {hasDiscount && (
        <span className="truncate text-sm line-through opacity-50">
          R$ {normalizeValue(Number(product.basePrice))}
        </span>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={handleDecreaseQuantity}
        >
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{quantity}</span>

        <Button
          size={"icon"}
          variant={"outline"}
          onClick={handleIncreaseQuantity}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-70">{product.description}</p>
      </div>

      <Button className="mt-8 py-6 font-bold uppercase">
        Adicionar ao carrinho
      </Button>

      <div className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2">
        <div className="flex items-center gap-2">
          <TruckIcon />

          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <strong>FSPacket®</strong>
            </p>
            <p className="text-xs text-[#8162FF]">
              Envio para <strong>todo Brasil</strong>
            </p>
          </div>
        </div>

        <strong className="text-xs">Frete grátis</strong>
      </div>
    </div>
  );
}

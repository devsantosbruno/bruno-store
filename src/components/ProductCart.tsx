import { normalizeValue } from "@/helpers/product";
import { CartProduct } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

interface ProductCartProps {
  product: CartProduct;
}

export function ProductCart({ product }: ProductCartProps) {
  const hasDiscount = product.discountPercentage > 0;

  const [quantity, setQuantity] = useState(product.quantity);

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
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.name}
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-xs">{product.name}</p>

          <div className="flex items-center gap-2">
            <strong className="text-sm">
              R$ {normalizeValue(Number(product.totalPrice))}
            </strong>

            {hasDiscount && (
              <p className="text-xs line-through opacity-60">
                R$ {normalizeValue(Number(product.basePrice))}
              </p>
            )}
          </div>

          <div className="flex items-center gap-1">
            <Button
              size={"icon"}
              variant={"outline"}
              onClick={handleDecreaseQuantity}
              className="h-8 w-8"
            >
              <ArrowLeftIcon size={16} />
            </Button>

            <span className="text-xs">{quantity}</span>

            <Button
              size={"icon"}
              variant={"outline"}
              onClick={handleIncreaseQuantity}
              className="h-8 w-8"
            >
              <ArrowRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>

      <Button size="icon" variant="outline">
        <TrashIcon size={16} />
      </Button>
    </div>
  );
}

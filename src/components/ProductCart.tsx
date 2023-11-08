import { normalizeValue } from "@/helpers/product";
import { CartContext, CartProduct } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import { Button } from "./ui/button";

interface ProductCartProps {
  product: CartProduct;
}

export function ProductCart({ product }: ProductCartProps) {
  const { decreaseProductQuantity, increaseProductQuantity } =
    useContext(CartContext);

  const hasDiscount = product.discountPercentage > 0;

  function handleDecreaseQuantity() {
    decreaseProductQuantity(product.id);
  }

  function handleIncreaseQuantity() {
    increaseProductQuantity(product.id);
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

            <span className="text-xs">{product.quantity}</span>

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

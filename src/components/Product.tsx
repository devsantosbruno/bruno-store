import { ProductWithTotalPrice, normalizeValue } from "@/helpers/product";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";

interface ProductProps {
  product: ProductWithTotalPrice;
}

export function Product({ product }: ProductProps) {
  const hasDiscount = product.discountPercentage > 0;

  return (
    <div className="flex max-w-[156px] flex-col gap-4">
      <div className="relative flex h-full w-full min-w-[156px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          width={95}
          height={90}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
          alt={product.name}
        />

        {hasDiscount && (
          <Badge className="absolute left-3 top-3 flex items-center gap-1 px-2 py-[2px]">
            <ArrowDownIcon size={14} />
            {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="truncate text-sm">{product.name}</p>

        <div className="flex items-center gap-2">
          {hasDiscount && (
            <p className="font-semibold">
              R$ {normalizeValue(product.totalPrice)}
            </p>
          )}

          <p className="text-xs line-through opacity-75">
            R$ {normalizeValue(Number(product.basePrice))}
          </p>
        </div>
      </div>
    </div>
  );
}

import { totalPriceFormatted } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";
import { ProductCart } from "./ProductCart";
import { Badge } from "./ui/badge";

export function Cart() {
  const { products } = useContext(CartContext);

  return (
    <div className="flex flex-col gap-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <ShoppingCartIcon size={16} />
        Catálogo
      </Badge>

      {products.map((item) => (
        <div className="flex flex-col gap-5" key={item.id}>
          <ProductCart product={totalPriceFormatted(item) as any} />
        </div>
      ))}
    </div>
  );
}

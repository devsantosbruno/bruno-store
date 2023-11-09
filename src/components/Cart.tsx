import { normalizeValue, totalPriceFormatted } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";
import { ProductCart } from "./ProductCart";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

export function Cart() {
  const { products, subTotal, total, totalDiscount, cartTotalPrice } =
    useContext(CartContext);

  return (
    <div className="flex flex-col gap-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      {products.length ? (
        products.map((item) => (
          <div className="flex flex-col gap-5" key={item.id}>
            <ProductCart product={totalPriceFormatted(item) as any} />
          </div>
        ))
      ) : (
        <h3 className="text-center font-semibold">Carrinho vazio!</h3>
      )}

      <div className="flex flex-col gap-3">
        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Subtotal</p>
          <p>R$ {normalizeValue(subTotal)}</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Entrega</p>
          <p>GRÁTIS</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Descontos</p>
          <p>- R$ {normalizeValue(totalDiscount)}</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-xs font-bold">
          <p>Total</p>
          <p>R$ {normalizeValue(total)}</p>
        </div>
      </div>
    </div>
  );
}

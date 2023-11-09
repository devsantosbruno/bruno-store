import { createCheckout } from "@/actions/checkout";
import { normalizeValue, totalPriceFormatted } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { loadStripe } from "@stripe/stripe-js";
import { ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";
import { ProductCart } from "./ProductCart";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

export function Cart() {
  const { products, subTotal, total, totalDiscount } = useContext(CartContext);

  async function handleFinishPurchase() {
    const checkout = await createCheckout(products);

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
  }

  return (
    <div className="flex h-full flex-col gap-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      {!products.length ? (
        <h3 className="text-center font-semibold">Carrinho vazio!</h3>
      ) : (
        <>
          <ScrollArea className="h-full">
            <div className="flex flex-col gap-7">
              {products.map((item) => (
                <ProductCart
                  key={item.id}
                  product={totalPriceFormatted(item) as any}
                />
              ))}
            </div>
          </ScrollArea>

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

          <Button
            className="mt-8 py-6 font-bold uppercase"
            onClick={handleFinishPurchase}
          >
            Finalizar compra
          </Button>
        </>
      )}
    </div>
  );
}

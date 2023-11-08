import { CartContext } from "@/providers/cart";
import { ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";
import { Badge } from "./ui/badge";

export function Cart() {
  const { products } = useContext(CartContext);

  return (
    <div className="p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <ShoppingCartIcon size={16} />
        Catálogo
      </Badge>

      {products.map((item) => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </div>
  );
}

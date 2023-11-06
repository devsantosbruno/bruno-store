import { Product } from "@/components/Product";
import { totalPriceFormatted } from "@/helpers/product";
import { Product as ProductType } from "@prisma/client";

interface ProductsListProps {
  products: ProductType[];
}

export function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((item) => (
        <Product key={item.id} product={totalPriceFormatted(item)} />
      ))}
    </div>
  );
}

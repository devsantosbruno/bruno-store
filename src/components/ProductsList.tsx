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
        <div key={item.id} className="w-full max-w-[170px]">
          <Product product={totalPriceFormatted(item)} />
        </div>
      ))}
    </div>
  );
}

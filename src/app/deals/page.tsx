import { Product } from "@/components/Product";
import { Badge } from "@/components/ui/badge";
import { totalPriceFormatted } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { PercentIcon } from "lucide-react";

export default async function DealsPage() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <PercentIcon size={16} />
        Ofertas
      </Badge>

      <div className="mt-5 grid grid-cols-2 gap-8 ">
        {deals.map((item) => (
          <Product key={item.id} product={totalPriceFormatted(item)} />
        ))}
      </div>
    </div>
  );
}

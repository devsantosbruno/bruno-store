import { prismaClient } from "@/lib/prisma";
import { Images } from "./components/images";
import { Info } from "./components/Info";
import { totalPriceFormatted } from "@/helpers/product";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: params.slug,
    },
  });

  if (!product) {
    return null;
  }

  return (
    <div>
      <Images imageUrls={product.imageUrls} name={product.name} />

      <div className="mt-8 px-5">
        <Info product={totalPriceFormatted(product)} />
      </div>
    </div>
  );
}

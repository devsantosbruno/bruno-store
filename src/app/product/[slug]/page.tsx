import { prismaClient } from "@/lib/prisma";
import { Images } from "./components/images";
import { Info } from "./components/Info";
import { totalPriceFormatted } from "@/helpers/product";
import { ProductsList } from "@/components/ProductsList";
import { Title } from "@/app/(home)/components/Title";

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
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: params.slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) {
    return null;
  }

  return (
    <div className="pb-10">
      <Images imageUrls={product.imageUrls} name={product.name} />

      <div className="mt-8 px-5">
        <Info product={totalPriceFormatted(product)} />
      </div>

      <div className="mt-14">
        <Title title="Produtos relacionados" />
        <ProductsList products={product.category.products} />
      </div>
    </div>
  );
}

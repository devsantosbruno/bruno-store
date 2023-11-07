import { ProductsList } from "@/components/ProductsList";
import { Title } from "@/components/Title";
import { totalPriceFormatted } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { Images } from "./components/Images";
import { Info } from "./components/Info";

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
        <Title title="Produtos Recomendados" />
        <ProductsList products={product.category.products} />
      </div>
    </div>
  );
}

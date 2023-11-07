import { prismaClient } from "@/lib/prisma";
import { Images } from "./components/images";

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
      <h1>{product.name}</h1>
      <Images imageUrls={product.imageUrls} name={product.name} />
    </div>
  );
}

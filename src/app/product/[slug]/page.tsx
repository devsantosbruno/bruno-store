import { prismaClient } from "@/lib/prisma";

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
      <div>
        <h1>{product.name}</h1>
      </div>
    </div>
  );
}

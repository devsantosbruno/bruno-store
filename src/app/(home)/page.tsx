import { prismaClient } from "@/lib/prisma";
import { Categories } from "./components/Categories";
import { ProductsList } from "./components/ProductsList";
import { PromoBanner } from "./components/PromoBanner";
import { Title } from "./components/Title";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <div className="">
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mês!"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <Title title="Ofertas" />
        <ProductsList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="Até 55% de desconto em mouses!"
      />

      <div className="mt-8">
        <Title title="Teclados" />
        <ProductsList products={keyboards} />
      </div>
    </div>
  );
}

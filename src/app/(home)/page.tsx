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

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 pb-14 pt-8">
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mês!"
      />

      <div className="px-5">
        <Categories />
      </div>

      <div>
        <Title title="Ofertas" />
        <ProductsList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="Até 55% de desconto em mouses!"
      />

      <div>
        <Title title="Teclados" />
        <ProductsList products={keyboards} />
      </div>

      <div>
        <PromoBanner
          src="/banner-home-03.png"
          alt="Até 55% de desconto em fones!"
        />
      </div>

      <div>
        <Title title="Mouses" />
        <ProductsList products={mouses} />
      </div>
    </div>
  );
}

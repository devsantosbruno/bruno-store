import { prismaClient } from "@/lib/prisma";
import Image from "next/image";
import { Categories } from "./components/Categories";
import { ProductsList } from "./components/ProductsList";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="">
      <Image
        src="/banner-home-01.png"
        width={350}
        height={150}
        className="h-auto w-full px-5"
        sizes="100vw"
        alt="Até 55% de desconto esse mês!"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <ProductsList products={deals} />
      </div>
    </div>
  );
}

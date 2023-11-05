import { prismaClient } from "@/lib/prisma";
import { Category } from "./Category";

export async function Categories() {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
      {categories.map((item) => (
        <Category key={item.id} category={item} />
      ))}
    </div>
  );
}

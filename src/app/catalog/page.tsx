import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import { Category } from "./components/Category";

export default async function CatalogPage() {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <ShapesIcon size={16} />
        Catálogo
      </Badge>

      <div className="mt-8 grid grid-cols-2 gap-8">
        {categories.map((item) => (
          <Category key={item.id} category={item} />
        ))}
      </div>
    </div>
  );
}

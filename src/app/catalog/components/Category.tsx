import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryProps {
  category: Category;
}

export function Category({ category }: CategoryProps) {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex flex-col">
        <div className="bg-category-item-gradient flex min-h-[150px] w-full items-center justify-center rounded-t-lg">
          <Image
            src={category.imageUrl}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
            alt={category.name}
          />
        </div>

        <div className="rounded-b-lg bg-accent py-3">
          <p className="text-center text-sm font-semibold">{category.name}</p>
        </div>
      </div>
    </Link>
  );
}

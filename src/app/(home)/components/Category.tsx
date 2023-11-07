import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/categoryIcon";
import { Category } from "@prisma/client";

interface CategoryProps {
  category: Category;
}

export function Category({ category }: CategoryProps) {
  return (
    <Badge
      variant="outline"
      className="flex items-center justify-center gap-2 rounded-lg py-3"
    >
      {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}

      <span className="text-xs font-bold ">{category.name}</span>
    </Badge>
  );
}

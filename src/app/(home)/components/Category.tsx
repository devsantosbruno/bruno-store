import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from "lucide-react";

interface CategoryProps {
  category: Category;
}

export function Category({ category }: CategoryProps) {
  const iconSize = 16;

  const categoryIcon = {
    keyboards: <KeyboardIcon size={iconSize} />,
    monitors: <MonitorIcon size={iconSize} />,
    headphones: <HeadphonesIcon size={iconSize} />,
    mousepads: <SquareIcon size={iconSize} />,
    speakers: <SpeakerIcon size={iconSize} />,
    mouses: <MouseIcon size={iconSize} />,
  };

  return (
    <Badge
      variant="outline"
      className="flex items-center justify-center gap-2 rounded-lg py-3"
    >
      {categoryIcon[category.slug as keyof typeof categoryIcon]}

      <span className="text-xs font-bold ">{category.name}</span>
    </Badge>
  );
}

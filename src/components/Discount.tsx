import { ArrowDownIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Badge, BadgeProps } from "./ui/badge";

export function Discount({ title, className, ...props }: BadgeProps) {
  return (
    <Badge
      className={twMerge("flex items-center gap-1 px-2 py-[2px]", className)}
      {...props}
    >
      <ArrowDownIcon size={14} />
      {title}%
    </Badge>
  );
}

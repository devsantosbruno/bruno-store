import { ComponentProps } from "react";

export function Title({ title, ...props }: ComponentProps<"h2">) {
  return (
    <h2 className="mb-3 pl-5 font-semibold uppercase" {...props}>
      {title}
    </h2>
  );
}

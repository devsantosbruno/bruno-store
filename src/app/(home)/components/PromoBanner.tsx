import Image, { ImageProps } from "next/image";

export function PromoBanner({ src, alt }: ImageProps) {
  return (
    <Image
      src={src}
      width={350}
      height={150}
      className="h-auto w-full px-5"
      sizes="100vw"
      alt={alt}
    />
  );
}

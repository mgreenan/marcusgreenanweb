import Image from "next/image";

type PhotoWithCaptionProps = {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  captionClassName?: string;
  loading?: "lazy" | "eager";
};

export function PhotoWithCaption({
  src,
  alt,
  caption,
  width = 1200,
  height = 900,
  sizes = "(min-width: 1024px) 520px, 100vw",
  className = "",
  imageClassName = "",
  captionClassName = "",
  loading = "lazy",
}: PhotoWithCaptionProps) {
  return (
    <figure className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={loading}
        className={`h-auto w-full rounded-xl object-cover ${imageClassName}`}
      />
      <figcaption className={`mt-3 text-sm text-zinc-400 ${captionClassName}`}>{caption}</figcaption>
    </figure>
  );
}

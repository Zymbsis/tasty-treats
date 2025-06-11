import Image, { ImageProps } from "next/image";

const ClippedSlide = ({ alt, ...props }: ImageProps) => (
  <div className="rounded-hero-lg bg-slide relative w-[222px] md:w-[351px]">
    <Image
      alt={alt}
      fill
      priority
      unoptimized
      className="rounded-hero-lg object-cover"
      {...props}
    />
  </div>
);

export default ClippedSlide;

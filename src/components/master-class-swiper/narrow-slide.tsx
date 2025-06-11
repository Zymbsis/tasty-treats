import "server-only";

import Image, { ImageProps } from "next/image";

const NarrowSlide = ({ alt, ...props }: ImageProps) => (
  <div className="bg-slide relative w-[80px] rounded-lg md:w-[137px]">
    <Image
      alt={alt}
      fill
      priority
      className="rounded-hero-lg object-cover"
      unoptimized
      {...props}
    />
  </div>
);

export default NarrowSlide;

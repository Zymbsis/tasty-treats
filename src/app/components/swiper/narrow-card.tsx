import Image, { ImageProps } from "next/image";

const NarrowCard = ({ alt, ...props }: ImageProps) => (
  <div className="w-[80px] md:w-[137px]">
    <Image
      alt={alt}
      fill
      priority
      sizes="(max-width: 767px) 253px, 400px"
      className="animate-fade-in rounded-hero-lg object-cover"
      {...props}
    />
  </div>
);

export default NarrowCard;

import Image, { ImageProps } from "next/image";

const ClippedCard = ({ alt, ...props }: ImageProps) => (
  <div className="animate-fade-in rounded-hero-lg bg-slide relative w-[222px] md:w-[351px]">
    <Image
      alt={alt}
      fill
      priority
      sizes="(max-width: 768px) 300px, 500px"
      className="rounded-hero-lg object-cover"
      {...props}
    />
  </div>
);

export default ClippedCard;

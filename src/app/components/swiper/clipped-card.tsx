import Image, { ImageProps } from "next/image";

const ClippedCard = ({ alt, ...props }: ImageProps) => (
  <div className="w-[222px] md:w-[351px]">
    <Image
      alt={alt}
      fill
      priority
      sizes="(max-width: 768px) 222px, 351px"
      className="animate-fade-in rounded-xl object-cover"
      {...props}
    />
  </div>
);

export default ClippedCard;

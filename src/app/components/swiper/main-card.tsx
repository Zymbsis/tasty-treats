import Image, { ImageProps } from "next/image";

type Props = ImageProps & { cardTitle: string; cardSubtitle: string };

const MainCard = ({ cardTitle, cardSubtitle, alt, ...props }: Props) => (
  <div className="border-accent/30 bg-slide animate-fade-in rounded-hero-lg flex w-[200px] flex-col justify-end overflow-hidden border p-3.5 pt-7 md:w-[351px] md:px-6 md:py-8">
    <span className="glow-ellipse"></span>
    <div className="relative h-full">
      <Image
        alt={alt}
        priority
        fill
        sizes="(max-width: 767px) 300px, 500px"
        className="object-contain"
        {...props}
      />
    </div>
    <h2 className="text-secondary-foreground/60 text-10/snug mt-5 text-center font-medium uppercase md:text-sm/tight">
      {cardTitle}
    </h2>
    <p className="text-secondary-foreground/20 text-8/normal mt-2 text-center md:text-xs/tight">
      {cardSubtitle}
    </p>
  </div>
);

export default MainCard;

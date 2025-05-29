import Image, { ImageProps } from "next/image";

type Props = ImageProps & { cardTitle: string; cardSubtitle: string };

const MainCard = ({ cardTitle, cardSubtitle, alt, ...props }: Props) => (
  <div className="border-accent/30 bg-slide animate-fade-in flex w-[200px] flex-col justify-end overflow-hidden rounded-xl border p-3.5 md:w-[351px] md:px-6 md:py-8">
    <span className="glow-ellipse"></span>
    <Image alt={alt} priority className="z-10" {...props} />
    <h2 className="text-secondary-foreground/60 text-10/snug mt-5 text-center font-medium uppercase md:text-sm/tight">
      {cardTitle}
    </h2>
    <p className="text-secondary-foreground/20 text-8/normal mt-2 text-center md:text-xs/tight">
      {cardSubtitle}
    </p>
  </div>
);

export default MainCard;

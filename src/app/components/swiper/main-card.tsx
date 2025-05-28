import Image, { ImageProps } from "next/image";

type Props = ImageProps & { cardTitle: string; cardSubtitle: string };

const MainCard = ({ cardTitle, cardSubtitle, alt, ...props }: Props) => (
  <div className="border-slide bg-slide-bg animate-fade-in flex w-[200px] flex-col justify-end overflow-hidden rounded-xl border p-3.5 md:w-[351px] md:px-6 md:py-8">
    <span className="glow-ellipse"></span>
    <Image alt={alt} priority className="z-10" {...props} />
    <h2 className="text-slide-foreground text-10/snug md:text-14/tight mt-5 text-center font-medium uppercase">
      {cardTitle}
    </h2>
    <p className="text-slide-subtle text-8/normal md:text-12/tight mt-2 text-center">
      {cardSubtitle}
    </p>
  </div>
);

export default MainCard;

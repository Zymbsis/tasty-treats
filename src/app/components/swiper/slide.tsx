import "server-only";

import ClippedCard from "@app/components/swiper/clipped-card";
import MainCard from "@app/components/swiper/main-card";
import NarrowCard from "@app/components/swiper/narrow-card";
import { ComponentProps } from "react";

type Props = {
  narrowCardProps: ComponentProps<typeof NarrowCard>;
  mainCardProps: ComponentProps<typeof MainCard>;
  clippedCardProps: ComponentProps<typeof ClippedCard>;
};

const Slide = ({ narrowCardProps, mainCardProps, clippedCardProps }: Props) => (
  <div className="flex h-[280px] w-[518px] gap-2 *:relative *:shrink-0 md:h-[442px] md:gap-4">
    <NarrowCard {...narrowCardProps} />
    <MainCard {...mainCardProps} />
    <ClippedCard {...clippedCardProps} />
  </div>
);

export default Slide;

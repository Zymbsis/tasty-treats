import "server-only";

import { ComponentProps } from "react";
import NarrowSlide from "@/components/master-class-swiper/narrow-slide";
import MainSlide from "@/components/master-class-swiper/main-slide";
import ClippedSlide from "@/components/master-class-swiper/clipped-slide";

type Props = {
  narrowCardProps: ComponentProps<typeof NarrowSlide>;
  mainCardProps: ComponentProps<typeof MainSlide>;
  clippedCardProps: ComponentProps<typeof ClippedSlide>;
};

const SwiperSlide = ({
  narrowCardProps,
  mainCardProps,
  clippedCardProps,
}: Props) => (
  <div className="flex h-[280px] w-[518px] gap-2 *:relative *:shrink-0 md:h-[442px] md:gap-4">
    <NarrowSlide {...narrowCardProps} />
    <MainSlide {...mainCardProps} />
    <ClippedSlide {...clippedCardProps} />
  </div>
);

export default SwiperSlide;

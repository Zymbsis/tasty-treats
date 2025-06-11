import { Suspense } from "react";
import HeroDescription from "@/components/hero/hero-description";
import MasterClassSwiper from "@/components/master-class-swiper/master-class-swiper";
import SwiperSkeleton from "@/components/skeletons/swiper-skeleton";

const Hero = () => {
  return (
    <section className="gap-5 xl:flex">
      <HeroDescription />
      <div className="xs:w-[355px] w-full shrink-0 overflow-hidden md:w-[736px] xl:w-[712px]">
        <Suspense fallback={<SwiperSkeleton />}>
          <MasterClassSwiper />
        </Suspense>
      </div>
    </section>
  );
};

export default Hero;

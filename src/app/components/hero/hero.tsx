import HeroDescription from "@app/components/hero/hero-description";
import HeroSwiper from "@app/components/swiper/hero-swiper";
import { Suspense } from "react";

const Hero = () => {
  return (
    <section className="gap-5 pt-16 xl:flex">
      <HeroDescription />
      <Suspense fallback="Loading">
        <HeroSwiper />
      </Suspense>
    </section>
  );
};

export default Hero;

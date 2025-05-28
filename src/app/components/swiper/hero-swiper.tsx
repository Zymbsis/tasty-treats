import Slide from "@app/components/swiper/slide";
import Slider from "@app/components/swiper/slider";

const HeroSwiper = () => (
  <div className="xs:w-[355px] w-full shrink-0 overflow-hidden md:w-[736px] xl:w-[712px]">
    <Slider>
      <Slide
        narrowCardProps={{
          src: "/chef_1.png",
          alt: "Smiling mustached chef in apron with arms crossed",
        }}
        mainCardProps={{
          src: "/plate_1.png",
          alt: "Grilled meat skewers on a black plate with green sauce",
          width: 471,
          height: 426,
          cardTitle: "Grilled, smoky, delicious barbecue",
          cardSubtitle: "Spanish",
        }}
        clippedCardProps={{
          src: "/dish_1.png",
          alt: "Grilled skewer served with fluffy quinoa",
          sizes: "(max-width: 768px) 295px, 464px",
        }}
      />
      <Slide
        narrowCardProps={{
          src: "/chef_2.png",
          alt: "Smiling female chef in white coat with arms crossed",
        }}
        mainCardProps={{
          src: "/plate_2.png",
          alt: "Pizza with tomato sauce, basil, and black & green olives",
          width: 450,
          height: 450,
          cardTitle: "Hot, cheesy and satisfying pizza",
          cardSubtitle: "Italian",
        }}
        clippedCardProps={{
          src: "/dish_2.png",
          alt: "Freshly baked pizza with basil and olives",
          sizes: "(max-width: 768px) 222px, 351px",
        }}
      />
      <Slide
        narrowCardProps={{
          src: "/chef_3.png",
          alt: "Smiling chef in a toque with arms crossed",
        }}
        mainCardProps={{
          src: "/plate_3.png",
          alt: "Stack of pancakes with blueberries on a white plate",
          width: 516,
          height: 462,
          cardTitle: " Fluffy and sweet pancakes",
          cardSubtitle: "American",
        }}
        clippedCardProps={{
          src: "/dish_3.png",
          alt: "Pancakes with blueberries",
          sizes: "(max-width: 768px) 222px, 351px",
        }}
      />
    </Slider>
  </div>
);

export default HeroSwiper;

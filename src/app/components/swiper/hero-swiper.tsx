import Slide from "@app/components/swiper/slide";
import Slider from "@app/components/swiper/slider";
import { Event, getEvents } from "@app/lib/services/api";

const HeroSwiper = async () => {
  const events: Event[] = await getEvents();

  return (
    <div className="xs:w-[355px] w-full shrink-0 overflow-hidden md:w-[736px] xl:w-[712px]">
      <Slider>
        {events.map(({ _id, cook, topic }) => (
          <Slide
            key={_id}
            narrowCardProps={{ src: cook.imgWebpUrl, alt: cook.name }}
            mainCardProps={{
              src: topic.previewWebpUrl,
              alt: topic.name,
              cardTitle: topic.name,
              cardSubtitle: topic.area,
            }}
            clippedCardProps={{ src: topic.imgWebpUrl, alt: topic.name }}
          />
        ))}
      </Slider>
    </div>
  );
};

export default HeroSwiper;

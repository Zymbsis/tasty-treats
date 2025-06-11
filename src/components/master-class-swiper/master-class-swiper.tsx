import SwiperSlide from "@/components/master-class-swiper/swiper-slide";
import SwiperWrapper from "@/components/master-class-swiper/swiper-wrapper";
import { getEvents } from "@/lib/services/api";

const MasterClassSwiper = async () => {
  let events;
  try {
    events = await getEvents();
  } catch (error) {
    console.error(error);
    return (
      <div className="flex h-[200px] items-center justify-center leading-tight xl:h-[442px]">
        <p className="text-foreground/60 text-center md:leading-4">
          Something went wrong while loading masterclasses.
          <br />
          &nbsp;
          <br />
          Please try refreshing the page.
        </p>
      </div>
    );
  }

  return (
    <SwiperWrapper>
      {events.map(({ _id, cook, topic }) => (
        <SwiperSlide
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
    </SwiperWrapper>
  );
};

export default MasterClassSwiper;

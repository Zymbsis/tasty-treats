import { Skeleton } from "@heroui/react";

const SwiperSkeleton = () => {
  return (
    <div className="flex h-[302px] gap-2 pb-[22px] md:h-[468px] md:gap-4 md:pb-[26px]">
      <Skeleton className="w-20 rounded-lg md:w-[137px]" />
      <Skeleton className="w-50 rounded-lg md:w-[351px]" />
      <Skeleton className="w-[59px] rounded-l-lg md:w-[216px] xl:w-[192px]" />
    </div>
  );
};

export default SwiperSkeleton;

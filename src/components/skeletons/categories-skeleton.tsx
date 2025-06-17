import { Skeleton } from "@heroui/react";
const range = Array.from({ length: 10 });

const CategoriesSkeleton = () => {
  return (
    <div className="mb-10 md:mb-16">
      <Skeleton className="mb-6 h-[50px] w-[168px] rounded-lg" />
      <div className="flex h-[198px] flex-col gap-4 overflow-hidden md:h-[416px] md:gap-5">
        {range.map((_, index) => (
          <Skeleton
            key={index}
            className="h-[19px] shrink-0 rounded-lg md:h-[23.5px]"
          ></Skeleton>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSkeleton;

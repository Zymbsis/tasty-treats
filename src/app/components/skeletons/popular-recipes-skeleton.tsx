import { Skeleton } from "@heroui/react";

const baseArray = Array.from({ length: 4 });

const PopularRecipesSkeleton = () => {
  return (
    <>
      <h2 className="mb-5 text-lg/snug font-semibold whitespace-nowrap uppercase md:mb-8 xl:text-2xl/7">
        Popular recipes
      </h2>

      <div className="flex h-[158px] flex-col gap-6 overflow-hidden md:h-[316px] md:gap-4 xl:h-[364px] xl:gap-8">
        {baseArray.map((_, index) => (
          <div key={index} className="flex h-[67px] gap-4 md:gap-2 xl:gap-4">
            <Skeleton className="size-16 shrink-0 rounded-sm md:size-12 xl:size-16"></Skeleton>
            <div className="flex w-full flex-col gap-2">
              <Skeleton className="h-[18px] rounded-sm"></Skeleton>
              <Skeleton className="h-[41px] rounded-sm"></Skeleton>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularRecipesSkeleton;

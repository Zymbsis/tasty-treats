import { Skeleton } from "@heroui/react";

const FilterBarSkeleton = () => {
  return (
    <div className="text-foreground/50 relative -top-[24px] flex flex-wrap gap-3.5 gap-y-2.5 pb-[28px] text-sm/tight xl:gap-[12px]">
      <div className="w-full md:w-[265px]">
        <p className="mb-1.5">Search</p>
        <Skeleton className="h-[50px] w-full rounded-lg" />
      </div>
      <div className="w-[160px] xl:w-[146px]">
        <p className="mb-1.5">Time</p>
        <Skeleton className="h-[50px] rounded-lg" />
      </div>
      <div className="w-[160px] xl:w-[144px]">
        <p className="mb-1.5">Area</p>
        <Skeleton className="h-[50px] rounded-lg" />
      </div>
      <div className="w-[188px]">
        <p className="mb-1.5">Ingredients</p>
        <Skeleton className="h-[50px] rounded-lg" />
      </div>
    </div>
  );
};

export default FilterBarSkeleton;

import { cn } from "@heroui/react";
import { StarIcon } from "@heroicons/react/24/solid";
import { formatNumber } from "@app/lib/utils/formatNumber";

const baseArray = Array.from({ length: 5 });

const Rating = ({ rating }: { rating: number }) => {
  const formattedRating = formatNumber(rating);

  return (
    <div className="flex">
      <span className="text-hover-foreground dark:text-active-foreground/50 mr-0.5 text-sm/4.5 font-medium">
        {formattedRating}
      </span>
      <ul className="flex gap-0.5">
        {baseArray.map((_, index) => {
          const isFilled = +rating.toFixed(0) >= index + 1;

          return (
            <li key={index}>
              <StarIcon
                className={cn(
                  isFilled ? "text-star" : "text-active-foreground/50",
                  "size-4",
                )}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Rating;

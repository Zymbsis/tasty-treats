import { cn } from "@heroui/react";
import { StarIcon } from "@heroicons/react/24/solid";
import { formatNumber } from "@/lib/utils/formatNumber";

type Props = {
  rating: number;
  className?: string;
  starSize?: string;
  gap?: string;
  filledColor?: string;
  unfilledColor?: string;
};

const range = Array.from({ length: 5 });

const Rating = ({
  rating,
  starSize,
  gap,
  filledColor,
  unfilledColor,
  className,
}: Props) => {
  const formattedRating = formatNumber(rating);

  return (
    <div
      className={cn(
        "text-hover-foreground dark:text-active-foreground/50 flex items-center gap-1 text-sm/4.5 font-medium md:gap-0.5",
        className,
      )}
    >
      <span>{formattedRating}</span>
      <ul className={cn("flex", gap ?? "gap-0.5")}>
        {range.map((_, index) => {
          const isFilled = +rating.toFixed(0) >= index + 1;

          return (
            <li key={index}>
              <StarIcon
                className={cn(
                  isFilled
                    ? (filledColor ?? "text-star")
                    : (unfilledColor ?? "text-active-foreground/50"),
                  starSize ?? "size-4",
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

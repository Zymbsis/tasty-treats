import { Chip, cn } from "@heroui/react";
import { ComponentPropsWithRef } from "react";

type Props = { tags: string[] } & ComponentPropsWithRef<"ul">;

const RecipeTags = ({ tags, ...props }: Props) => {
  return (
    <ul className={cn("flex flex-wrap gap-2 md:gap-1")} {...props}>
      {tags.map(
        (tag, index) =>
          tag && (
            <li key={index}>
              <Chip
                variant="bordered"
                className="h-auto p-2 text-xs/3.5 font-medium"
              >{`#${tag}`}</Chip>
            </li>
          ),
      )}
    </ul>
  );
};

export default RecipeTags;

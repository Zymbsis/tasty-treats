"use client";

import RecipeItem from "@/components/recipes/recipe-item";
import { Recipe } from "@/lib/types/api.types";
import { motion, MotionProps } from "motion/react";

const animationProps: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const RecipesList = ({ recipes }: { recipes: Recipe[] }) => {
  return (
    <ul
      id="recipes"
      className="flex scroll-mt-90 flex-col gap-6 pb-10 md:scroll-mt-75 md:flex-row md:flex-wrap md:gap-4 md:pb-16 xl:scroll-mt-60 xl:gap-y-8"
    >
      {recipes.map(recipe => (
        <motion.li
          key={recipe._id}
          className="relative aspect-square w-full rounded-lg md:h-[264px] md:w-[calc((100%-16px)/2)] xl:h-[287px] xl:w-[calc((100%-32px)/3)]"
          {...animationProps}
        >
          <RecipeItem {...recipe} />
        </motion.li>
      ))}
    </ul>
  );
};

export default RecipesList;

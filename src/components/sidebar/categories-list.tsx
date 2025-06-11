"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@heroui/react";

import CategoriesButton from "@/components/sidebar/categories-button";
import { SEARCH_PARAMS } from "@/lib/constants/search-params";
import { Category } from "@/lib/types/api.types";

const CategoriesList = ({ categories }: { categories: Category[] }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  const handleUpdateCategories = (category?: string) => {
    if (category) params.set(SEARCH_PARAMS.CATEGORY, category);
    else params.delete(SEARCH_PARAMS.CATEGORY);
    params.set(SEARCH_PARAMS.PAGE, "1");

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="mb-10 md:mb-16">
      <CategoriesButton onClick={() => handleUpdateCategories()} />
      <ul className="custom-scrollbar flex h-[198px] flex-col gap-0.5 overflow-y-auto md:h-[416px] md:gap-1">
        {categories.map(category => {
          const isCategorySelected =
            params.get(SEARCH_PARAMS.CATEGORY) === category.name;
          return (
            <li
              key={category._id}
              className={cn(
                "hover:*:text-accent text-sm/tight font-medium transition-colors first:*:pt-0 last:*:pb-0 md:text-base/tight",
                isCategorySelected ? "text-accent" : "text-foreground/30",
              )}
            >
              <CategoriesButton
                onClick={() => handleUpdateCategories(category.name)}
                className="w-full cursor-pointer py-2 text-start md:py-2.5"
              >
                {category.name}
              </CategoriesButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesList;

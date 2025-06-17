"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@heroui/react";

import { SEARCH_PARAMS } from "@/lib/constants/search-params";
import { Category } from "@/lib/types/api.types";
import ExtendedButton from "@/components/ui/extended-button";

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
      {pathname === "/" && (
        <ExtendedButton
          variant="bordered"
          color="secondary"
          size="md"
          onClick={() => handleUpdateCategories()}
          className="text-foreground/50 mb-6 px-7 py-3 md:mb-[30px] xl:mb-[42px]"
        >
          All categories
        </ExtendedButton>
      )}

      <ul
        className={cn(
          "custom-scrollbar flex",
          pathname === "/" &&
            "h-[198px] flex-col gap-0.5 overflow-y-auto md:h-[416px] md:gap-1",
          pathname !== "/" && "flex-row gap-3 overflow-x-auto md:gap-4",
        )}
      >
        {pathname !== "/" && (
          <li>
            <ExtendedButton
              variant="bordered"
              color="secondary"
              size="sm"
              onClick={() => handleUpdateCategories()}
            >
              All categories
            </ExtendedButton>
          </li>
        )}
        {categories.map(category => {
          const isCategorySelected =
            params.get(SEARCH_PARAMS.CATEGORY) === category.name;
          return (
            <li key={category._id}>
              <ExtendedButton
                onClick={() => handleUpdateCategories(category.name)}
                variant={isCategorySelected ? "solid" : "bordered"}
                color={isCategorySelected ? "primary" : "secondary"}
                size="sm"
                className={cn(
                  pathname === "/"
                    ? "w-full cursor-pointer py-2 text-start md:py-2.5"
                    : "",
                )}
              >
                {category.name}
              </ExtendedButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesList;

"use client";

import Pagination from "@/components/recipes/pagination";
import { SEARCH_PARAMS } from "@/lib/constants/search-params";
import { PaginationMetadata } from "@/lib/types/api.types";
import { useWindowSize } from "@uidotdev/usehooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PaginationWrapper = ({
  paginationMetadata,
}: {
  paginationMetadata: PaginationMetadata;
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const { width } = useWindowSize();
  if (!width) return null;

  const { totalPages } = paginationMetadata;
  const page = Number(paginationMetadata.page);
  const isMobile = width <= 768;
  const query = new URLSearchParams(searchParams);
  const recipeRef = document.querySelector("#recipes");

  const handleSetPage = (page: number) => {
    query.set(SEARCH_PARAMS.PAGE, page.toString());
    push(`${pathname}?${query}`, { scroll: false });
    recipeRef?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Pagination
      handleSetPage={handleSetPage}
      page={page}
      total={totalPages}
      siblings={isMobile ? 0 : 1}
    />
  );
};

export default PaginationWrapper;

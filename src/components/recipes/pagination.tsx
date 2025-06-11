"use client";

import { SEARCH_PARAMS } from "@/lib/constants/search-params";
import { PaginationMetadata } from "@/lib/types/api.types";
// import {
//   ChevronDoubleLeftIcon,
//   ChevronDoubleRightIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
// } from "@heroicons/react/24/outline";
// import { cn } from "@heroui/react";
import { Pagination as HeroPagination } from "@heroui/react";
import { useWindowSize } from "@uidotdev/usehooks";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({
  paginationMetadata,
}: {
  paginationMetadata: PaginationMetadata;
}) => {
  const { totalPages } = paginationMetadata;
  const page = Number(paginationMetadata.page);
  const { width } = useWindowSize();
  const isMobile = (width || 0) <= 768;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();
  const query = new URLSearchParams(searchParams);

  const handleSetPage = (page: number) => {
    query.set(SEARCH_PARAMS.PAGE, page.toString());
    push(`${pathname}?${query}`, { scroll: false });
  };

  return (
    <HeroPagination
      showControls
      page={page}
      total={totalPages}
      onChange={handleSetPage}
      boundaries={0}
      siblings={isMobile ? 0 : 1}
    />
  );
};

export default Pagination;

"use client";

import { SEARCH_PARAMS, SearchParamsType } from "@/lib/constants/search-params";
import { useWindowSize } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PerPageController = ({ query }: { query: SearchParamsType }) => {
  const { width } = useWindowSize();
  const { replace } = useRouter();
  const { limit } = query;

  useEffect(() => {
    if (!width) return;
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1280;
    const isDesktop = width >= 1280;

    if (isMobile && limit === "6") return;
    if (isDesktop && limit === "9") return;
    if (isTablet && limit === "8") return;

    const updatedQuery = new URLSearchParams(query);

    if (isMobile) updatedQuery.set(SEARCH_PARAMS.LIMIT, "6");
    else if (isDesktop) updatedQuery.set(SEARCH_PARAMS.LIMIT, "9");
    else if (isTablet) updatedQuery.set(SEARCH_PARAMS.LIMIT, "8");

    updatedQuery.set(SEARCH_PARAMS.PAGE, "1");

    replace(`/?${updatedQuery}`, { scroll: false });
  }, [width, query, replace, limit]);

  return null;
};

export default PerPageController;

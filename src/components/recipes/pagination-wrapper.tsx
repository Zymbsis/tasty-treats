"use client";

import { SEARCH_PARAMS } from "@/lib/constants/search-params";
import { useWindowSize } from "@uidotdev/usehooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useEffect } from "react";

const PaginationWrapper = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { width } = useWindowSize();
  useEffect(() => {
    if (!width) return;
    const query = new URLSearchParams(searchParams);
    const limit = query.get(SEARCH_PARAMS.LIMIT);
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1280;
    const isDesktop = width >= 1280;
    if (isMobile && limit === "6") return;
    if (isDesktop && limit === "9") return;
    if (isTablet && limit === "8") return;

    if (isMobile) query.set(SEARCH_PARAMS.LIMIT, "6");
    else if (isDesktop) query.set(SEARCH_PARAMS.LIMIT, "9");
    else query.set(SEARCH_PARAMS.LIMIT, "8");
    replace(`${pathname}?${query}`);
  }, [width, pathname, replace, searchParams]);

  return <div>{children}</div>;
};

export default PaginationWrapper;

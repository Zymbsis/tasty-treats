"use client";

import { ROUTES_MAP } from "@/lib/constants/rotes";
import { cn } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <nav className="flex h-full flex-col items-center justify-center text-lg font-medium md:flex-row md:gap-4 md:text-base/tight">
      {ROUTES_MAP.map(route => (
        <Link
          className={cn(
            "hover:text-accent text-foreground p-2 transition-colors md:p-0",
            {
              "text-accent": route.href === pathname,
            },
          )}
          key={route.href}
          href={route.href}
          scroll={false}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;

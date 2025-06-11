"use client";

import { cn } from "@heroui/react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { href: "/", name: "Home" },
  { href: "/favorites", name: "Favorites" },
];

const NavLinks = ({ ...props }: Omit<LinkProps, "href">) => {
  const pathname = usePathname();

  return (
    <nav className="flex min-h-6 flex-col items-center text-base font-medium md:flex-row md:gap-4">
      {routes.map(route => (
        <Link
          className={cn(
            "text-hover-foreground md:text-foreground p-2 transition-colors md:p-0",
            {
              "text-active-foreground dark:text-accent md:text-accent":
                route.href === pathname,
            },
          )}
          key={route.href}
          href={route.href}
          {...props}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;

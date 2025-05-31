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
    <nav className="flex min-h-6 flex-col items-center gap-4 text-xs font-medium md:flex-row">
      {routes.map(route => (
        <Link
          className={cn(
            "text-hover-foreground md:text-foreground transition-colors",
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

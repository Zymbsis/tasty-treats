"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { href: "/", name: "Home" },
  { href: "/favorites", name: "Favorites" },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden min-h-6 items-center gap-4 text-xs font-medium md:flex">
      {routes.map((route) => (
        <Link
          className={clsx("transition-colors", {
            "text-accent": route.href === pathname,
          })}
          key={route.href}
          href={route.href}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;

import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex w-fit items-center text-lg font-semibold -tracking-[0.04em] md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform"
    >
      <span className="text-accent">tasty</span>treats.
    </Link>
  );
};

export default Logo;

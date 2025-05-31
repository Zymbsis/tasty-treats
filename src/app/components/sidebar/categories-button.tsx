import { ComponentPropsWithRef } from "react";
type Props = ComponentPropsWithRef<"button">;

const CategoriesButton = ({ children, ...props }: Props) => {
  return (
    <button
      type="button"
      className="border-foreground/20 text-foreground/50 hover:bg-accent hover:text-hover-foreground rounded-hero-lg mb-6 cursor-pointer border bg-transparent px-7 py-3.5 text-lg font-medium transition-colors hover:border-transparent md:mb-7 xl:mb-10"
      {...props}
    >
      {children ?? "All categories"}
    </button>
  );
};

export default CategoriesButton;

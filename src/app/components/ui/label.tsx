import { ComponentPropsWithRef } from "react";

const Label = ({ children, ...props }: ComponentPropsWithRef<"label">) => {
  return (
    <label
      className="text-foreground/50 mb-2 text-xs/3.5 font-medium md:text-sm/4.5"
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;

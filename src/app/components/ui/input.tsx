import { Input as HeroInput, InputProps } from "@heroui/react";

const Input = ({ ...props }: InputProps) => {
  return (
    <HeroInput
      variant="bordered"
      color="default"
      radius="lg"
      labelPlacement="outside"
      classNames={{
        base: "md:w-[278px] data-[has-label=true]:mt-0",
        inputWrapper: "h-[46px] md:h-[48px] px-[18px] py-3.5 ",
        label: "group-data-[filled-within=true]:text-foreground/50 bottom-0",
        input: "text-sm/4.5 md:text-base/5",
        clearButton: "text-foreground/50 hover:text-foreground/40",
        mainWrapper: "justify-end",
      }}
      {...props}
    />
  );
};

export default Input;

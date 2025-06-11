import { Autocomplete, AutocompleteProps } from "@heroui/react";

const Select = <T,>({ ...props }: AutocompleteProps<T & {}>) => {
  return (
    <Autocomplete
      radius="lg"
      labelPlacement="outside"
      variant="bordered"
      scrollShadowProps={{
        className: "custom-scrollbar",
        hideScrollBar: false,
        isEnabled: false,
      }}
      clearButtonProps={{
        className:
          "text-foreground/50 data-[hover=true]:bg-transparent data-[hover=true]:text-accent size-[18px] min-w-none mr-1",
      }}
      selectorButtonProps={{
        className:
          "text-foreground/50 data-[hover=true]:bg-transparent data-[hover=true]:text-accent size-[18px] min-w-none *:size-full stroke-w-2",
      }}
      inputProps={{
        classNames: {
          base: "data-[has-label=true]:mt-0",
          mainWrapper: "justify-end",
          inputWrapper: "h-[46px] md:h-[48px] px-[18px] py-3.5",
          label: "group-data-[filled-within=true]:text-foreground/50 bottom-0",
          input:
            "text-sm/4.5 md:text-base/5 data-[has-end-content=true]:pe-0 truncate",
        },
      }}
      popoverProps={{
        classNames: {
          content: "bg-contrast-foreground py-2.5 pl-2.5",
          base: "max-h-[176px] md:max-h-[188px]",
        },
      }}
      listboxProps={{
        hideSelectedIcon: true,
        itemClasses: {
          base: "px-2 py-1 data-[hover=true]:bg-foreground/5",
          title:
            "text-sm/4.5 md:text-base/5 font-medium text-foreground/30 group-data-[selected=true]:text-foreground",
        },
        classNames: {
          base: "p-0",
          list: "gap-0",
        },
      }}
      {...props}
    />
  );
};

export default Select;

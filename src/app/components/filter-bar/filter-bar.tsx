"use client";

// import AreaSelect from "@app/components/filter-bar/area-select";
// import IngredientsSelect from "@app/components/filter-bar/ingredients-select";
// import SearchInput from "@app/components/filter-bar/search-input";
// import TimeSelect from "@app/components/filter-bar/time-select";
import { useRouter, useSearchParams } from "next/navigation";
import { cn, Input } from "@heroui/react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

const FilterBar = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const title = params.get("title");
  const { replace } = useRouter();
  const handleSetParams = (value: string, param: string) => {
    params.set(param, value);
    replace(`/?${params.toString()}`, { scroll: false });
  };

  const handleResetTitle = () => {
    params.delete("title");
    replace(`/?${params.toString()}`, { scroll: false });
  };

  return (
    // <fieldset className="flex w-full flex-wrap gap-3.5">
    //   <SearchInput />
    //   <TimeSelect />
    //   <IngredientsSelect />
    //   <AreaSelect />
    // </fieldset>
    <fieldset>
      <Input
        startContent={
          <MagnifyingGlassIcon
            className={cn(
              "mr-1.5 size-[18px] shrink-0 stroke-2",
              title ? "text-accent" : "text-foreground/50",
            )}
          />
        }
        endContent={<XMarkIcon className="size-[18px]" />}
        variant="bordered"
        color="default"
        radius="lg"
        labelPlacement="outside"
        label="Search"
        placeholder="Enter Text"
        isClearable
        defaultValue={title || ""}
        onValueChange={value => handleSetParams(value.trim(), "title")}
        onClear={handleResetTitle}
        classNames={{
          inputWrapper: "min-h-none h-12 pl-4 pr-9 md:w-[278px]",
          label: "group-data-[filled-within=true]:text-foreground/50 bottom-0",
          input: "text-sm/4.5 md:text-base/5",
          clearButton: "text-foreground/50 hover:text-foreground/40",
        }}
      />
    </fieldset>
  );
};

export default FilterBar;

"use client";

import { Key } from "react";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AutocompleteItem, cn } from "@heroui/react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

import Input from "@app/components/ui/input";
import Select from "@app/components/ui/select";
import ResetButton from "@app/components/filter-bar/reset-button";

import { TimeOption } from "@app/lib/utils/generateTimeOptions";
import { SEARCH_PARAMS } from "@app/lib/constants/search-params";
import { Area, Ingredient } from "@app/lib/types/api.types";

type Props = {
  ingredients: Ingredient[];
  areas: Area[];
  timeOptions: TimeOption[];
};

const FilterBar = ({ ingredients, areas, timeOptions }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const query = new URLSearchParams(searchParams);
  const title = query.get(SEARCH_PARAMS.TITLE) ?? "";
  const time = query.get(SEARCH_PARAMS.TIME) ?? "";
  const area = query.get(SEARCH_PARAMS.AREA) ?? "";
  const ingredient = query.get(SEARCH_PARAMS.INGREDIENT) ?? "";

  const handleUpdateQuery = (key: string, value: Key | null) => {
    if (value) query.set(key, value.toString());
    else query.delete(key);

    push(`${pathname}?${query}`, { scroll: false });
  };

  const handleResetQuery = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { title, time, area, ingredient, ...rest } =
      Object.fromEntries(query);

    const updatedQuery = new URLSearchParams(rest);

    push(`${pathname}?${updatedQuery}`, { scroll: false });
  };

  const handleUpdateTitle = (value: string) =>
    handleUpdateQuery(SEARCH_PARAMS.TITLE, value);

  return (
    <form className="relative mb-5 pb-8">
      <fieldset className="flex w-full flex-wrap gap-3 gap-y-9">
        <Input
          label="Search"
          placeholder="Enter Text"
          defaultValue={title}
          onValueChange={useDebouncedCallback(handleUpdateTitle, 300)}
          isClearable
          startContent={
            <MagnifyingGlassIcon
              className={cn(
                "mr-1.5 size-[18px] shrink-0 stroke-2",
                title ? "text-accent" : "text-foreground/50",
              )}
            />
          }
          endContent={<XMarkIcon className="size-[18px]" />}
        />
        <Select
          label="Time"
          placeholder="0 min"
          defaultSelectedKey={time}
          onSelectionChange={value =>
            handleUpdateQuery(SEARCH_PARAMS.TIME, value)
          }
          popoverProps={{
            classNames: {
              content: "bg-contrast-foreground py-2.5 pl-2.5",
              base: "max-h-[124px] md:max-h-[128px]",
            },
          }}
          className="w-[160px] xl:w-[146px]"
        >
          {timeOptions.map(option => (
            <AutocompleteItem key={option.key}>{option.label}</AutocompleteItem>
          ))}
        </Select>
        <Select
          label="Area"
          placeholder="Region"
          defaultItems={areas}
          defaultSelectedKey={area}
          onSelectionChange={value =>
            handleUpdateQuery(SEARCH_PARAMS.AREA, value)
          }
          className="w-[161px] xl:w-[144px]"
        >
          {area => (
            <AutocompleteItem key={area.name}>{area.name}</AutocompleteItem>
          )}
        </Select>
        <Select
          label="Ingredients"
          placeholder="Product"
          defaultItems={ingredients}
          defaultSelectedKey={ingredient}
          onSelectionChange={value =>
            handleUpdateQuery(SEARCH_PARAMS.INGREDIENT, value)
          }
          className="w-[188px]"
        >
          {ingredient => (
            <AutocompleteItem key={ingredient._id}>
              {ingredient.name}
            </AutocompleteItem>
          )}
        </Select>
        <ResetButton type="reset" onPress={handleResetQuery} />
      </fieldset>
    </form>
  );
};

export default FilterBar;

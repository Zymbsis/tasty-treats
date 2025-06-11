import FilterBarWrapper from "@/components/filter-bar/filter-bar-wrapper";
import { getAreas, getIngredients } from "@/lib/services/api";
import { generateTimeOptions } from "@/lib/utils/generateTimeOptions";

const FilterBar = async () => {
  const [ingredients, areas] = await Promise.all([
    getIngredients(),
    getAreas(),
  ]);
  const timeOptions = generateTimeOptions(5, 120);

  return (
    <FilterBarWrapper
      ingredients={ingredients}
      areas={areas}
      timeOptions={timeOptions}
    />
  );
};

export default FilterBar;

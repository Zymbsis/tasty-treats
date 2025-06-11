import FilterBar from "@/components/filter-bar/filter-bar";
import { getAreas, getIngredients } from "@/lib/services/api";
import { generateTimeOptions } from "@/lib/utils/generateTimeOptions";

const FilterBarWrapper = async () => {
  const [ingredients, areas] = await Promise.all([
    getIngredients(),
    getAreas(),
  ]);
  const timeOptions = generateTimeOptions(5, 120);

  return (
    <FilterBar
      ingredients={ingredients}
      areas={areas}
      timeOptions={timeOptions}
    />
  );
};

export default FilterBarWrapper;

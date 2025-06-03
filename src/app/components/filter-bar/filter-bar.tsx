import FilterBarWrapper from "@app/components/filter-bar/filter-bar-wrapper";
import { getAreas, getIngredients } from "@app/lib/services/api";
import { generateTimeOptions } from "@app/lib/utils/generateTimeOptions";

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

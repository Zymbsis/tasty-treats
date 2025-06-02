import {
  Area,
  getAreas,
  getIngredients,
  Ingredient,
} from "@app/lib/services/api";
import FilterBarWrapper from "@app/components/filter-bar/filter-bar-wrapper";
import { generateTimeOptions } from "@app/lib/utils/generateTimeOptions";

const FilterBar = async () => {
  const [ingredients, areas]: [Ingredient[], Area[]] = await Promise.all([
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

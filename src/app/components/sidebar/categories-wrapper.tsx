import CategoriesList from "@app/components/sidebar/categories-list";
import { getCategories } from "@app/lib/services/api";

const CategoriesWrapper = async () => {
  const data = await getCategories();

  return <CategoriesList categories={data} />;
};

export default CategoriesWrapper;

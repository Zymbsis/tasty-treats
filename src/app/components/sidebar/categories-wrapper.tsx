import CategoriesList from "@app/components/sidebar/categories-list";
import { getCategories } from "@app/lib/services/api";

const CategoriesWrapper = async () => {
  const categories = await getCategories();

  return <CategoriesList categories={categories} />;
};

export default CategoriesWrapper;

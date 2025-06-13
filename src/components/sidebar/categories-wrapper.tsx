import CategoriesList from "@/components/sidebar/categories-list";
import { getCategories } from "@/lib/services/api";

const CategoriesWrapper = async () => {
  const categories = await getCategories();
  if (!categories) return null;

  return <CategoriesList categories={categories} />;
};

export default CategoriesWrapper;

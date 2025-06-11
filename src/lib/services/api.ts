import { SearchParamsType } from "@/lib/constants/search-params";
import {
  Area,
  Category,
  Event,
  FullRecipe,
  Ingredient,
  PaginatedRecipes,
  PopularRecipe,
} from "@/lib/types/api.types";

const BASE_URL = "https://tasty-treats-backend.p.goit.global/api";

const dataFetcher = async <T>(
  endpoint: `/${string}`,
  resource?: string,
): Promise<T | null> => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      cache: "force-cache",
      next: { revalidate: 3600 },
    });

    if (!response.ok)
      throw new Error(
        `Failed to fetch ${resource ?? endpoint.replace("/", "")}`,
      );
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getCategories = () => dataFetcher<Category[]>("/categories");

export const getPopularRecipes = () =>
  dataFetcher<PopularRecipe[]>("/recipes/popular", "popular recipes");

export const getEvents = () => dataFetcher<Event[]>("/events");

export const getIngredients = () => dataFetcher<Ingredient[]>("/ingredients");

export const getAreas = () => dataFetcher<Area[]>("/areas");

export const getRecipes = (query: SearchParamsType) => {
  const searchParams = new URLSearchParams(query);
  return dataFetcher<PaginatedRecipes>(`/recipes?${searchParams}`, "recipes");
};

export const getRecipeById = (id: string) =>
  dataFetcher<FullRecipe>(`/recipes/${id}`, `recipe with id: ${id}`);

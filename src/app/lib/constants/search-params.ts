export const SEARCH_PARAMS = {
  CATEGORY: "category",
  TITLE: "title",
  AREA: "area",
  INGREDIENT: "ingredient",
  TIME: "time",
  PAGE: "page",
  LIMIT: "limit",
};

export type SearchParamsType = {
  [K in (typeof SEARCH_PARAMS)[keyof typeof SEARCH_PARAMS]]: string;
};

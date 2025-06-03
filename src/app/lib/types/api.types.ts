export type Event = {
  _id: string;
  cook: EventCook;
  topic: EventTopic;
};
export type EventCook = {
  name: string;
  imgUrl: string;
  imgWebpUrl: string;
};
export type EventTopic = {
  name: string;
  area: string;
  previewUrl: string;
  imgUrl: string;
  imgWebpUrl: string;
  previewWebpUrl: string;
};

export type Category = {
  _id: string;
  name: string;
};
export type Ingredient = {
  _id: string;
  name: string;
  desc: string;
  img: string;
};
export type Area = {
  _id: string;
  name: string;
};
export type PopularRecipe = {
  _id: string;
  title: string;
  description: string;
  preview: string;
  popularity: number;
};

export type FullRecipeIngredient = {
  id: string;
  measure: string;
};
export type FullRecipe = Omit<PopularRecipe, "popularity"> & {
  category: string;
  area: string;
  instructions: string;
  thumb: string;
  time: string;
  youtube: string;
  tag: string[];
  ingredients: FullRecipeIngredient[];
  rating: number;
};

export type PaginationMetadata = {
  page: string;
  perPage: string;
  totalPages: number;
};

export type PaginatedRecipes = PaginationMetadata & {
  results: FullRecipe[];
};

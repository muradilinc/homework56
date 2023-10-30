interface Ingredients {
  name: string;
  price: number;
  image: string;
  count?: number;
}

interface IngredientState {
  name: string;
  count: number;
}
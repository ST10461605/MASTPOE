export const globalDishItems = [];

export const addDishItem = (dish) => {
  globalDishItems.push(dish); // Adds new dish to the global array
};

export const removeDishItem = (id) => {
  const updatedDishes = globalDishItems.filter(dish => dish.id !== id);
  globalDishItems.length = 0; // Clear the array
  globalDishItems.push(...updatedDishes); // Replace with filtered items
};

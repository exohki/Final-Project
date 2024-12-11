
// Example meal data
export const meals = [
    { id: 1, name: "Spaghetti Bolognese", description: "A classic Italian pasta dish.", ingredientsLink:"https://www.recipetineats.com/spaghetti-bolognese/" },
    { id: 2, name: "Chicken Salad", description: "A fresh and healthy chicken salad.", ingredientsLink:"https://www.spendwithpennies.com/classic-chicken-salad-recipe/" },
    { id: 3, name: "Tacos", description: "Delicious tacos with beef, cheese, and salsa.", ingredientsLink:"https://feelgoodfoodie.net/recipe/ground-beef-tacos-napa-cabbage-guacamole/" },
  ];
  
  // Function to add a new meal
  export function addMeal(meal) {
    meals.push(meal);
  }
  
  // Function to delete a meal by ID
  export function deleteMeal(mealId) {
    const index = meals.findIndex(meal => meal.id === mealId);
    if (index !== -1) {
      meals.splice(index, 1);
    }
  }
  
  // Function to update a meal
  export function updateMeal(updatedMeal) {
    const index = meals.findIndex(meal => meal.id === updatedMeal.id);
    if (index !== -1) {
      meals[index] = updatedMeal;
    }
  }
  
  // Function to get all meals (returns a copy to avoid mutation)
  export function getMeals() {
    return [...meals];
  }
  
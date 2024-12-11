import React from 'react';
import { Link } from 'react-router-dom';

const recipes = [
  {
    id: 1,
    name: "Mediterranean Quinoa Salad",
    imageUrl: "https://cdn.loveandlemons.com/wp-content/uploads/2020/08/quinoa-salad-recipes.jpg",
    description: "A light, refreshing salad packed with vegetables and protein-rich quinoa.",
    link: "https://www.loveandlemons.com/quinoa-salad-recipe/"
  },
  {
    id: 2,
    name: "Thai Green Curry",
    imageUrl: "https://www.recipetineats.com/tachyon/2019/02/Thai-Green-Curry_5.jpg?resize=900%2C1260&zoom=0.72",
    description: "A spicy, fragrant curry with fresh herbs, coconut milk, and vibrant veggies.",
    link: "https://hot-thai-kitchen.com/green-curry-new-2/"
  },
  {
    id: 3,
    name: "Chocolate Avocado Mousse",
    imageUrl: "https://cookingwithayeh.com/wp-content/uploads/2021/02/Avocado-Chocolate-Mousse-1.jpg",
    description: "A creamy, decadent dessert that’s surprisingly healthy and simple.",
    link: "https://chocolatecoveredkatie.com/avocado-chocolate-mousse-vegan-healthy/"
  }
];

function Home({ savedRecipes, setSavedRecipes }) {
  const handleSaveRecipe = (recipe) => {
    if (!savedRecipes.some((r) => r.id === recipe.id)) {
      setSavedRecipes([...savedRecipes, recipe]);
    } else {
      alert("This recipe is already saved.");
    }
  };

  return (
    <main className="home-container">
      <h1>Try These Recipes</h1>
      <div className="recipe-cards-container">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.name} />}
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <a href={recipe.link} target="_blank" rel="noopener noreferrer">
              View Full Recipe
            </a>
            <button onClick={() => handleSaveRecipe(recipe)}>Save Recipe</button>
          </div>
        ))}
      </div>
      <Link to="/saved-recipes">View Saved Recipes</Link>
    </main>
  );
}

export default Home;

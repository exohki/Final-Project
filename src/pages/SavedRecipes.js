import React from 'react';
import { Link } from 'react-router-dom';

const SavedRecipes = ({ savedRecipes, setSavedRecipes }) => {
  const handleDeleteRecipe = (recipeId) => {
    const updatedRecipes = savedRecipes.filter((recipe) => recipe.id !== recipeId);
    setSavedRecipes(updatedRecipes);
  };

  return (
    <main>
      <h1>Saved Recipes</h1>
      {savedRecipes.length === 0 ? (
        <p>
          No recipes saved yet. Go back to the <Link to="/">Home</Link> page to save recipes!
        </p>
      ) : (
        <div className="recipe-cards-container">
          {savedRecipes.map((recipe) => (
            <div className="recipe-card" key={recipe.id}>
              {recipe.imageUrl && (
                <img
                  src={recipe.imageUrl}
                  alt={recipe.name}
                  className="recipe-image"
                />
              )}
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
              <a href={recipe.link} target="_blank" rel="noopener noreferrer">
                View Ingredients
              </a>
              <button onClick={() => handleDeleteRecipe(recipe.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default SavedRecipes;

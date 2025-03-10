import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css'; // Ensure you have this CSS file

const AddedRecipe = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Retrieve existing recipes from local storage
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

    // If new recipe exists in state and is not already stored, add it
    if (location.state?.recipes) {
      setRecipes(location.state.recipes);
    } else {
      setRecipes(storedRecipes);
    }
  }, [location.state]);

  // Navigate to RecipeForm page when adding another recipe
  const handleAddRecipeClick = () => {
    navigate('/Recipeform'); // Ensure this route matches your App.js setup
  };

  // Delete a recipe
  const handleDeleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  return (
    <div className="added-recipe-container">
      <div className="recipe-banner">
        <h1 className="recipe-banner-text">Your Saved Recipes</h1>
      </div>

      <div className="container mt-4">
        <div className="added-recipe-box p-4 shadow-lg">
          <h2 className="text-center mb-4">CREATED RECIPES</h2>

          {recipes.length > 0 ? (
            <div className="recipe-grid">
              {recipes.map((recipe, index) => (
                <div key={index} className="recipe-card">
                  <div className="recipe-content">
                    <h5>{recipe.recipeTitle}</h5>
                    <p><strong>By:</strong> {recipe.recipeBy}</p>
                    <p><strong>Cook Time:</strong> {recipe.cookTime} mins</p>
                    <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                    <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                    <p><strong>Instructions:</strong> {recipe.instructions}</p>
                    <p><strong>Rating:</strong> {recipe.rating} ⭐</p>
                    <button 
                      className="btn btn-danger clear-button"
                      onClick={() => handleDeleteRecipe(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center">No recipes added yet.</p>
          )}

          <button className="btn btn-warning w-100 mt-3" onClick={handleAddRecipeClick}>
            Add Another Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddedRecipe;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import the external CSS file

const AddRecipe = () => {
  const [recipeBy, setRecipeBy] = useState("");
  const [recipeTitle, setRecipeTitle] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [rating, setRating] = useState("5");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const newRecipe = { recipeBy, recipeTitle, cuisine, cookTime, ingredients, instructions, rating };

     // Get existing recipes from local storage
     const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

     // Add new recipe to stored recipes
     const updatedRecipes = [...storedRecipes, newRecipe];
     localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
 


    try {
      const response = await fetch('http://localhost:5000/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecipe),
      });

      if (!response.ok) {
        throw new Error('Failed to save recipe');
      }

       // Redirect to "Added Recipes" page
    navigate('/added-recipes', { state: updatedRecipes });


      // Reset Form Fields
      setRecipeBy("");
      setRecipeTitle("");
      setCuisine("");
      setCookTime("");
      setIngredients("");
      setInstructions("");
      setRating("5");

    } catch (error) {
      console.error("Error:", error);
      setMessage("Error adding recipe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-recipe-container">
      <div className="recipe-form-box">
        <h2 className="text-center mb-3">Add a New Recipe</h2>
        {message && <p className="alert">{message}</p>}
        <form onSubmit={handleSubmit}>
          
          {/* First Row: Recipe By & Recipe Title */}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label"><strong>Recipe by</strong></label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={recipeBy}
                onChange={(e) => setRecipeBy(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label"><strong>Recipe Title</strong></label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Recipe Title"
                value={recipeTitle}
                onChange={(e) => setRecipeTitle(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Second Row: Cook Time & Cuisine */}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label"><strong>Cook Time (mins)</strong></label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter cook time in minutes"
                value={cookTime}
                onChange={(e) => setCookTime(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label"><strong>Cuisine</strong></label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter cuisine (e.g. Italian, Mexican, etc.)"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-2">
            <label className="form-label"><strong>Ingredients</strong></label>
            <textarea
              className="form-control"
              placeholder="Enter ingredients (comma-separated)"
              rows="2"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mb-2">
            <label className="form-label"><strong>Instructions</strong></label>
            <textarea
              className="form-control"
              placeholder="Enter instructions (comma-separated)"
              rows="3"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mb-2">
            <label className="form-label"><strong>Rating</strong></label>
            <select className="form-select" value={rating} onChange={(e) => setRating(e.target.value)}>
              <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
              <option value="4">⭐⭐⭐⭐ - Very Good</option>
              <option value="3">⭐⭐⭐ - Good</option>
              <option value="2">⭐⭐ - Fair</option>
              <option value="1">⭐ - Poor</option>
            </select>
          </div>

          <button type="submit" className="btn btn-warning w-100 add-recipe-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit Recipe"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;

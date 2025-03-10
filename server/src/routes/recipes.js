const express = require('express');
const Recipe = require('../models/Recipe');
const router = express.Router();

// Add a Recipe
router.post('/', async (req, res) => {
    const { by, title, time, type, ingredients, instructions } = req.body;
    try {
        const recipe = new Recipe({ by, title, time, type, ingredients, instructions });
        await recipe.save();
        res.status(201).json({ message: "Recipe added successfully", recipe });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error saving recipe" });
    }
});

// Get All Recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching recipes" });
    }
});

// Get a Single Recipe by ID
router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.json(recipe);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching recipe" });
    }
});

// Delete a Recipe by ID
router.delete('/:id', async (req, res) => {
    try {
        await Recipe.findByIdAndDelete(req.params.id);
        res.json({ message: "Recipe deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting recipe" });
    }
});

module.exports = router;

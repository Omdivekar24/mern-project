const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    by: String,
    title: String,
    time: Number,
    type: String,
    ingredients: String,
    instructions: String
});

module.exports = mongoose.model('Recipe', recipeSchema);

import {getRecipe} from "./firebase_services";


document.addEventListener("DOMContentLoaded", async (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const recipe = await getRecipe(id);
    console.log(recipe.value.ingredients);
    const recipeInfo = document.getElementById('recipe-info');
    const recipeName = document.createElement('h3');
    const recipeDescription = document.createElement('p');
    const recipeIngredients = document.createElement('ul')
    recipe.value.ingredients.forEach((ingredient)=> {
        const ingredientItem = document.createElement('li');
        ingredientItem.textContent = ingredient;
        recipeIngredients.appendChild(ingredientItem);
    })
    const recipeInstructions = document.createElement('p');
    recipeName.textContent = recipe.value.recipeName;
    recipeInfo.appendChild(recipeName);
    recipeDescription.textContent = recipe.value.description;
    recipeInfo.appendChild(recipeDescription);
    recipeInfo.appendChild(recipeIngredients);
    recipeInstructions.textContent = recipe.value.instructions;
    recipeInfo.appendChild(recipeInstructions);

    
});
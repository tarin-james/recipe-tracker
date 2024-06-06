import getRecipes from "./firebase_services";
const recipeContainer = document.querySelector('#loaded-recipes');
const searchBar = document.querySelector('#search-bar');
let savedRecipes = [];



document.addEventListener("DOMContentLoaded", async (event) => {
    const recipes = await getRecipes();
    savedRecipes = recipes
    recipeContainer.innerHTML = ''
    recipes.forEach((recipe)=> {
        const recipeWrapper = document.createElement('div');
        recipeWrapper.classList.add('recipeEntry')
        recipeWrapper.addEventListener('click', () => {
            window.location = `../details/index.html?id=${recipe.id}`;
        });
        const recipeName = document.createElement('h2');
        const recipeDescription = document.createElement('p');
        recipeName.textContent = recipe.value.recipeName;
        recipeName.classList.add('recipeName');
        recipeDescription.textContent = recipe.value.description;
        recipeDescription.classList.add('recipeDescription');
        recipeWrapper.appendChild(recipeName);
        recipeWrapper.appendChild(recipeDescription);
        recipeContainer.appendChild(recipeWrapper);
    })

});

searchBar.addEventListener("input", (event) => {
    const filteredRecipes = savedRecipes.filter((recipe) => {
        return recipe?.value?.recipeName.includes(event.target.value)
    });
    recipeContainer.innerHTML = ''
    console.log(filteredRecipes)
    filteredRecipes.forEach((recipe)=> {
        const recipeWrapper = document.createElement('div');
        recipeWrapper.classList.add('recipeEntry')
        recipeWrapper.addEventListener('click', () => {
            window.location = `../details/index.html?id=${recipe.id}`;
        });
        const recipeName = document.createElement('h2');
        const recipeDescription = document.createElement('p');
        recipeName.textContent = recipe.value.recipeName;
        recipeName.classList.add('recipeName');
        recipeDescription.textContent = recipe.value.description;
        recipeDescription.classList.add('recipeDescription');
        recipeWrapper.appendChild(recipeName);
        recipeWrapper.appendChild(recipeDescription);
        recipeContainer.appendChild(recipeWrapper);
    })
});




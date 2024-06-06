import getRecipes from "./firebase_services";
const recipeContainer = document.querySelector('#loaded-recipes');

document.addEventListener("DOMContentLoaded", async (event) => {
    const recipes = await getRecipes();
    recipeContainer.innerHTML = ''
    recipes.forEach((recipe)=> {
        const recipeWrapper = document.createElement('div');
        recipeWrapper.classList.add('recipeEntry')
        recipeWrapper.addEventListener('click', () => {
            window.location = `../details/index.html?id=${recipe.id}`;
        });
        const recipeName = document.createElement('h3');
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


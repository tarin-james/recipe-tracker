import { addRecipe } from "./firebase_services";
const form = document.getElementById("create-form");
const ingredientContainer = document.getElementById("ingredients-added");
const ingredientItem = document.getElementById("Ingredients");
const addIngredientButton = document.getElementById("add-ingredient");
const addedIngredients = [];
form.addEventListener("submit", async (event) => {
  await createRecipe(event);
});

addIngredientButton.addEventListener("click", (event) => {
  ingredientItem.value ? addIngredient(event) : null;
});

async function createRecipe(event) {
  event.preventDefault();
  let formData = new FormData(form);
  formData.delete("ingredients");
  const modifiedFormData = Object.fromEntries(formData);
  modifiedFormData["ingredients"] = addedIngredients;

  await addRecipe(modifiedFormData);
  console.log(modifiedFormData);
  window.location = '/'
}

function addIngredient() {
  const ingredientInput = document.createElement("input");
  const inputValue = ingredientItem.value;
  ingredientInput.value = inputValue;
  addedIngredients.push(ingredientInput.value);
  ingredientItem.value = "";
  ingredientInput.readOnly = true;
  ingredientContainer.appendChild(ingredientInput);
}

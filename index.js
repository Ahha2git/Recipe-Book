const API_KEY = "05324cd1f8934f9c8c123672a221b7c1"; // 👈 Replace with your real Spoonacular API key

async function getRecipes() {
  try {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=6&apiKey=${API_KEY}`);
    const data = await response.json();
    return data.recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}

function displayRecipes(recipes) {
  const list = document.getElementById("recipe-list");
  list.innerHTML = "";

  recipes.forEach(recipe => {
    const li = document.createElement("li");
    li.className = "recipe-item";
    li.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" />
      <h2>${recipe.title}</h2>
      <p><strong>Ready in:</strong> ${recipe.readyInMinutes} mins</p>
      <a href="${recipe.sourceUrl}" target="_blank">View Recipe</a>
    `;
    list.appendChild(li);
  });
}

document.getElementById("load-btn").addEventListener("click", async () => {
  const recipes = await getRecipes();
  displayRecipes(recipes);
});



const fetchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const recipesContainer = document.querySelector("#all-recipes");
const searchQuery = document.querySelector("#search-query");
const searchQueryBtn = document.querySelector("#search-query-btn");
const loader = document.querySelector("#loader");
const goToTop = document.querySelector("#go-to-top");
const modal = document.querySelector("#recipe-modal");
const closeModal = document.querySelector("#close-modal");
const modalImg = document.querySelector("#modal-img");
const modalTitle = document.querySelector("#modal-title");
const modalInstructions = document.querySelector("#modal-instructions");

let allRecipes = [];

async function fetchRecipes() {
  try {
    const response = await fetch(fetchApi);
    const data = await response.json();
    const recipes = data.meals;
    allRecipes = recipes;
    renderRecipes(recipes);
    loader.classList.add("hidden");
  } catch (error) {
    loader.classList.add("hidden");
    recipesContainer.innerHTML = `<p class="text-red-500">Failed to load recipes</p>`;
  }
}

fetchRecipes();

function renderRecipes(recipes) {
  recipesContainer.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeCard = document.createElement("div");

    recipeCard.classList.add(
      "rounded-2xl",
      "w-[350px]",
      "md:w-[250px]",
      "h-[450px]",
      "md:h-[450px]",
      "shadow-2xl",
      "overflow-hidden"
    );

    recipeCard.innerHTML = `<img src=${recipe.strMealThumb} alt="" class="h-3/7 w-full">
    <div class="px-3 flex flex-col justify-evenly items-start h-4/7">
    <h4 class="text-2xl">${recipe.strMeal}</h4>
    <p class="line-clamp-3 text-[12px]">${recipe.strInstructions}</p>
    <button id="${recipe.idMeal}" class="open-details uppercase bg-amber-400 text-[16px] p-2 rounded-xl" href="">view details</button>
    </div>`;

    recipesContainer.append(recipeCard);
  });
}

searchQueryBtn.addEventListener("click", async function (e) {
  const recipe = allRecipes.filter((recipe) => {
    return recipe.strMeal
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
  });

  if (recipe.length === 0) {
    recipesContainer.innerHTML = `<h4 class="text-2xl">No recipe found</h4>`;
  } else {
    renderRecipes(recipe);
  }
});

recipesContainer.addEventListener("click", async function (e) {
  if (e.target.classList.contains("open-details")) {
    const recipeId = e.target.getAttribute("id");
    // const recipe = allRecipes.find((item) => item.idMeal === recipeId);
    const fetchById = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
    const response = await fetch(fetchById);
    const data = await response.json();
    const recipe = data.meals[0];

    modalImg.src = recipe.strMealThumb;
    modalTitle.textContent = recipe.strMeal;
    modalInstructions.textContent = recipe.strInstructions;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
});

window.addEventListener("scroll", function (e) {
  if (window.scrollY > 300) {
    goToTop.classList.add("show");
  } else {
    goToTop.classList.remove("show");
  }
});

// goToTop.addEventListener("click", function (e) {
//   // window.scrollY = 0;
//   console.log(window);
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

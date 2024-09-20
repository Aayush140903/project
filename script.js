

// const APP_ID = 'e39b6127';
// const APP_KEY = '15b6f702f45653310f6683e7b95a887a';

// let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
// const categories = ['Breakfast', 'Lunch', 'Dinner', 'Appetizer', 'Salad', 'Main Course', 'Side Dish', 'Baked Goods', 'Dessert', 'Snack', 'Soup', 'Drink'];
// let currentCategory = '';

// const categoryList = document.getElementById('category-list');
// const recipeList = document.getElementById('recipe-list');
// const recipeForm = document.getElementById('recipe-form');
// const recipeDetail = document.getElementById('recipe-detail');
// const searchInput = document.getElementById('search');
// const backButton = document.getElementById('back-button');
// const categorySelect = document.getElementById('category');

// function saveRecipes() {
//     localStorage.setItem('recipes', JSON.stringify(recipes));
// }

// function addRecipe(event) {
//     event.preventDefault();
//     const title = document.getElementById('title').value;
//     const ingredients = document.getElementById('ingredients').value.split('\n');
//     const instructions = document.getElementById('instructions').value;
//     const category = document.getElementById('category').value;

//     recipes.push({ title, ingredients, instructions, category, userAdded: true });
//     saveRecipes();
//     recipeForm.reset();
//     displayRecipes();
// }

// function displayCategories() {
//     categoryList.innerHTML = '';
//     categories.forEach(category => {
//         const button = document.createElement('button');
//         button.textContent = category;
//         button.classList.add('category-btn');
//         button.addEventListener('click', () => {
//             currentCategory = category;
//             fetchRecipes(category);
//             document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
//             button.classList.add('active');
//         });
//         categoryList.appendChild(button);
//     });

//     // Populate category select in the form
//     categorySelect.innerHTML = '<option value="">Select Category</option>';
//     categories.forEach(category => {
//         const option = document.createElement('option');
//         option.value = category;
//         option.textContent = category;
//         categorySelect.appendChild(option);
//     });
// }

// async function fetchRecipes(category) {
//     const url = `https://api.edamam.com/search?q=${category}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`;
    
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
        
//         const apiRecipes = data.hits.map(hit => ({
//             title: hit.recipe.label,
//             ingredients: hit.recipe.ingredientLines,
//             instructions: "Please visit the original recipe for detailed instructions.",
//             category: category,
//             userAdded: false,
//             url: hit.recipe.url,
//             image: hit.recipe.image
//         }));

//         recipes = [...recipes.filter(recipe => recipe.userAdded), ...apiRecipes];
//         saveRecipes();
//         displayRecipes();
//     } catch (error) {
//         console.error('Error fetching recipes:', error);
//     }
// }

// function displayRecipes(searchTerm = '') {
//     recipeList.innerHTML = '';
//     const filteredRecipes = recipes.filter(recipe => 
//         (currentCategory === '' || recipe.category === currentCategory) &&
//         (recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm.toLowerCase())) ||
//         recipe.category.toLowerCase().includes(searchTerm.toLowerCase()))
//     );

//     const predefinedRecipes = filteredRecipes.filter(recipe => !recipe.userAdded);
//     const userRecipes = filteredRecipes.filter(recipe => recipe.userAdded);

//     if (predefinedRecipes.length > 0) {
//         const predefinedHeader = document.createElement('h3');
//         predefinedHeader.textContent = 'Predefined Recipes';
//         recipeList.appendChild(predefinedHeader);
//         displayRecipeGroup(predefinedRecipes);
//     }

//     if (userRecipes.length > 0) {
//         const userHeader = document.createElement('h3');
//         userHeader.textContent = 'Your Recipes';
//         recipeList.appendChild(userHeader);
//         displayRecipeGroup(userRecipes);
//     }
// }

// function displayRecipeGroup(recipeGroup) {
//     recipeGroup.forEach((recipe, index) => {
//         const div = document.createElement('div');
//         div.classList.add('recipe-item');
//         div.textContent = recipe.title;
//         div.addEventListener('click', () => showRecipeDetail(recipes.indexOf(recipe)));
//         recipeList.appendChild(div);
//     });
// }

// function showRecipeDetail(index) {
//     const recipe = recipes[index];
//     document.getElementById('detail-title').textContent = recipe.title;
//     document.getElementById('detail-category').textContent = `Category: ${recipe.category}`;
    
//     const ingredientsList = document.querySelector('#detail-ingredients ul');
//     ingredientsList.innerHTML = '';
//     recipe.ingredients.forEach(ingredient => {
//         const li = document.createElement('li');
//         li.textContent = ingredient;
//         ingredientsList.appendChild(li);
//     });

//     const instructionsElement = document.querySelector('#detail-instructions p');
//     instructionsElement.textContent = recipe.instructions;
    
//     if (!recipe.userAdded) {
//         const link = document.createElement('a');
//         link.href = recipe.url;
//         link.textContent = "View full recipe";
//         link.target = "_blank";
//         instructionsElement.appendChild(document.createElement('br'));
//         instructionsElement.appendChild(link);
//     }

//     if (recipe.image) {
//         const img = document.createElement('img');
//         img.src = recipe.image;
//         img.alt = recipe.title;
//         img.style.maxWidth = '100%';
//         img.style.borderRadius = '8px';
//         img.style.marginBottom = '1rem';
//         document.getElementById('detail-content').prepend(img);
//     }

//     recipeDetail.classList.remove('hidden');
//     document.getElementById('categories').classList.add('hidden');
//     document.getElementById('recipes').classList.add('hidden');
//     document.getElementById('add-recipe').classList.add('hidden');
// }

// recipeForm.addEventListener('submit', addRecipe);
// searchInput.addEventListener('input', (e) => displayRecipes(e.target.value));
// backButton.addEventListener('click', () => {
//     recipeDetail.classList.add('hidden');
//     document.getElementById('categories').classList.remove('hidden');
//     document.getElementById('recipes').classList.remove('hidden');
//     document.getElementById('add-recipe').classList.remove('hidden');
// });

// displayCategories();
// displayRecipes();

const APP_ID = 'e39b6127';
const APP_KEY = '15b6f702f45653310f6683e7b95a887a';

let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
const categories = ['Breakfast', 'Lunch', 'Dinner', 'Appetizer', 'Salad', 'Main Course', 'Side Dish', 'Baked Goods', 'Dessert', 'Snack', 'Soup', 'Drink'];
let currentCategory = '';

const categoryList = document.getElementById('category-list');
const recipeList = document.getElementById('recipe-list');
const recipeForm = document.getElementById('recipe-form');
const recipeDetail = document.getElementById('recipe-detail');
const searchInput = document.getElementById('search');
const backButton = document.getElementById('back-button');
const categorySelect = document.getElementById('category');

function saveRecipes() {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

function addRecipe(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const ingredients = document.getElementById('ingredients').value.split('\n');
    const instructions = document.getElementById('instructions').value;
    const category = document.getElementById('category').value;

    recipes.push({ title, ingredients, instructions, category, userAdded: true });
    saveRecipes();
    recipeForm.reset();
    displayRecipes();
}

function displayCategories() {
    categoryList.innerHTML = '';
    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.classList.add('category-btn');
        button.addEventListener('click', () => {
            currentCategory = category;
            fetchRecipes(category);
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
        categoryList.appendChild(button);
    });

    // Populate category select in the form
    categorySelect.innerHTML = '<option value="">Select Category</option>';
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

async function fetchRecipes(category) {
    const url = `https://api.edamam.com/search?q=${category}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        console.log('Fetched API data:', data); // Debug output

        const apiRecipes = data.hits.map(hit => ({
            title: hit.recipe.label,
            ingredients: hit.recipe.ingredientLines,
            instructions: "Please visit the original recipe for detailed instructions.",
            category: category,
            userAdded: false,
            url: hit.recipe.url,
            image: hit.recipe.image
        }));

        recipes = [...recipes.filter(recipe => recipe.userAdded), ...apiRecipes];
        saveRecipes();
        displayRecipes();
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

// function displayRecipes(searchTerm = '') {
//     console.log('Displaying recipes:', recipes); // Debug output

//     recipeList.innerHTML = '';
//     const filteredRecipes = recipes.filter(recipe => 
//         (currentCategory === '' || recipe.category === currentCategory) &&
//         (recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm.toLowerCase())) ||
//         recipe.category.toLowerCase().includes(searchTerm.toLowerCase()))
//     );

//     const predefinedRecipes = filteredRecipes.filter(recipe => !recipe.userAdded);
//     const userRecipes = filteredRecipes.filter(recipe => recipe.userAdded);

//     if (predefinedRecipes.length > 0) {
//         const predefinedHeader = document.createElement('h3');
//         predefinedHeader.textContent = 'Predefined Recipes';
//         recipeList.appendChild(predefinedHeader);
//         displayRecipeGroup(predefinedRecipes);
//     }

//     if (userRecipes.length > 0) {
//         const userHeader = document.createElement('h3');
//         userHeader.textContent = 'Your Recipes';
//         recipeList.appendChild(userHeader);
//         displayRecipeGroup(userRecipes);
//     }
// }

function displayRecipes(searchTerm = '') {
    console.log('Displaying recipes:', recipes); // Debug output

    recipeList.innerHTML = '';
    const filteredRecipes = recipes.filter(recipe => 
        (currentCategory === '' || recipe.category === currentCategory) &&
        (recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm.toLowerCase())) ||
        recipe.category.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const predefinedRecipes = filteredRecipes.filter(recipe => !recipe.userAdded);
    const userRecipes = filteredRecipes.filter(recipe => recipe.userAdded);

    if (predefinedRecipes.length > 0) {
        const predefinedHeader = document.createElement('h3');
        predefinedHeader.textContent = 'Predefined Recipes';
        recipeList.appendChild(predefinedHeader);
        displayRecipeGroup(predefinedRecipes, recipeList);
    }

    displayUserRecipes(userRecipes);
}

function displayUserRecipes(userRecipes) {
    console.log('Displaying user recipes:', userRecipes); // Debug output

    const userRecipeList = document.getElementById('user-recipe-list');
    userRecipeList.innerHTML = '';

    if (userRecipes.length > 0) {
        userRecipes.forEach((recipe, index) => {
            const div = document.createElement('div');
            div.classList.add('recipe-item');
            div.textContent = recipe.title;
            div.addEventListener('click', () => showRecipeDetail(recipes.indexOf(recipe)));
            userRecipeList.appendChild(div);
        });
    } else {
        userRecipeList.innerHTML = '<p>No recipes added yet.</p>';
    }
}


function displayRecipeGroup(recipeGroup) {
    console.log('Displaying recipe group:', recipeGroup); // Debug output

    recipeGroup.forEach((recipe, index) => {
        const div = document.createElement('div');
        div.classList.add('recipe-item');
        div.textContent = recipe.title;
        div.addEventListener('click', () => showRecipeDetail(recipes.indexOf(recipe)));
        recipeList.appendChild(div);
    });
}

// function showRecipeDetail(index) {
//     const recipe = recipes[index];
//     document.getElementById('detail-title').textContent = recipe.title;
//     document.getElementById('detail-category').textContent = `Category: ${recipe.category}`;
    
//     const ingredientsList = document.querySelector('#detail-ingredients ul');
//     ingredientsList.innerHTML = '';
//     recipe.ingredients.forEach(ingredient => {
//         const li = document.createElement('li');
//         li.textContent = ingredient;
//         ingredientsList.appendChild(li);
//     });

//     const instructionsElement = document.querySelector('#detail-instructions p');
//     instructionsElement.textContent = recipe.instructions;
    
//     if (!recipe.userAdded) {
//         const link = document.createElement('a');
//         link.href = recipe.url;
//         link.textContent = "View full recipe";
//         link.target = "_blank";
//         instructionsElement.appendChild(document.createElement('br'));
//         instructionsElement.appendChild(link);
//     }

//     if (recipe.image) {
//         const img = document.createElement('img');
//         img.src = recipe.image;
//         img.alt = recipe.title;
//         img.style.maxWidth = '100%';
//         img.style.borderRadius = '8px';
//         img.style.marginBottom = '1rem';
//         document.getElementById('detail-content').prepend(img);
//     }

//     recipeDetail.classList.remove('hidden');
//     document.getElementById('categories').classList.add('hidden');
//     document.getElementById('recipes').classList.add('hidden');
//     document.getElementById('add-recipe').classList.add('hidden');
// }

function showRecipeDetail(index) {
    const recipe = recipes[index];
    document.getElementById('detail-title').textContent = recipe.title;
    document.getElementById('detail-category').textContent = `Category: ${recipe.category}`;
    
    const ingredientsList = document.querySelector('#detail-ingredients ul');
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    const instructionsElement = document.querySelector('#detail-instructions p');
    instructionsElement.textContent = recipe.instructions;
    
    if (!recipe.userAdded) {
        const link = document.createElement('a');
        link.href = recipe.url;
        link.textContent = "View full recipe";
        link.target = "_blank";
        instructionsElement.appendChild(document.createElement('br'));
        instructionsElement.appendChild(link);
    }

    if (recipe.image) {
        const img = document.createElement('img');
        img.src = recipe.image;
        img.alt = recipe.title;
        document.getElementById('detail-content').prepend(img);
    }

    recipeDetail.classList.remove('hidden');
    document.getElementById('categories').classList.add('hidden');
    document.getElementById('recipes').classList.add('hidden');
    document.getElementById('add-recipe').classList.add('hidden');
    document.getElementById('your-recipes').classList.add('hidden'); // Hide "Your Recipes" section
}


recipeForm.addEventListener('submit', addRecipe);
searchInput.addEventListener('input', (e) => displayRecipes(e.target.value));
backButton.addEventListener('click', () => {
    recipeDetail.classList.add('hidden');
    document.getElementById('categories').classList.remove('hidden');
    document.getElementById('recipes').classList.remove('hidden');
    document.getElementById('add-recipe').classList.remove('hidden');
});

displayCategories();
displayRecipes();

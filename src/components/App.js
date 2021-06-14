import React, { useState } from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';
import uuidv4 from 'uuid';

function App() {
  const [recipes, setRecipe] = useState(sampleRecipes)

  return (
    <RecipeList recipes={recipes} />
  );
}

function handleRecipeAdd() {
  const newRecipe = {
    id: Date.now().toString()
  }
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '0:45',
    instructions: '1. Put Salt and Pepper. \n2. Put the chicken in the oven. \n3. Eat the chicken.',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Teaspoon'
      }
    ]
  },
  {
    id: 1,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '1:45',
    instructions: '1. Put Salt, Pepper and Paprika. \n2. Put the pork in the oven. \n3. Eat the pork.',
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Teaspoon'
      }
    ]
  }
]

export default App;

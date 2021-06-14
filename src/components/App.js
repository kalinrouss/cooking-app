import React, { useState } from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        { id: uuidv4(), name: 'Name', amount: '1 Tbs' }
      ]
    }

    setRecipes([...recipes, newRecipe])
  }

  function handleDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeList recipes={recipes} handleRecipeAdd={handleRecipeAdd} handleDelete={handleDelete} />
  );
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

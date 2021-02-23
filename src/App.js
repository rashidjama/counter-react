import React, { useState } from 'react'
import RacipeList from './RacipeList';


function App() {
  const [recipes, setRecipes] = useState(sampleRecipe)

  function handleRecipesAdd() {
    const newRecipe = {
      id: Date.now().toString(),
      name: 'New',
      cookingTime: '1:00',
      Instructions: 'Instr.',
      Ingredients: [{name:'name', amount:'1TSP'}]
    }
    setRecipes([...recipes, newRecipe])
  }
  function handleRecipesDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }
  return(
    <RacipeList 
      recipes={recipes} 
      handleRecipesAdd={handleRecipesAdd}
      handleRecipesDelete={handleRecipesDelete}
    />
  )
}

const sampleRecipe = [
  {
    id: 1,
    name: 'Plain chicken',
    servings: 3,
    cookingTime: '1:45',
    Instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    Ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2bound'
      },
      {
        id: 1,
        name: 'salt',
        amount: '1tsp'
      },
    ]
  },
  {
    id: 1,
    name: 'Plain Goat meat',
    servings: 10,
    cookingTime: '5:00',
    Instructions: "1. Put salt on goat meat\n2. Put goat meat in oven\n3. Enjoy the goat meat!",
    Ingredients: [
      {
        id: 2,
        name: 'Goat',
        amount: '7bound'
      },
      {
        id: 1,
        name: 'Paprika',
        amount: '4tsp'
      },
    ]
  }
]

export default App;

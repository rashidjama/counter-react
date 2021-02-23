import React from 'react'
import Recipe from './Recipe'


export default function RacipeList(props) {
  const { recipes, handleRecipesAdd, handleRecipesDelete } = props
  return (
    <>
      <div>
        {recipes.map(recipe=> {
          return <Recipe 
            key={recipe.id}
            {...recipe}
            handleRecipesDelete ={handleRecipesDelete}
            />
        })}
    </div>
    <button onClick={handleRecipesAdd}>Add Recipe</button>
    </>
  )
}

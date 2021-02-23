import React from 'react'
import Ingredient from './Ingredient'


export default function IngredientList({Ingredients}) {
  return (
    <div>
      {Ingredients.map(Ing => {
        return <Ingredient key={Ing.id} {...Ing}/>
      })}
    </div>
  )
}

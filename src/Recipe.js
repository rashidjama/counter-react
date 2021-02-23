import React from 'react'
import IngredientList from './IngredientList'
import './Cook.css'
import './Header.css'


export default function Recipe(props) {
  const { name, servings, cookingTime, Instructions, Ingredients, id, handleRecipesDelete} = props
  return (
    <div className="Cook">
      <header className="Header">
        <h3>{name}</h3>
        <div>
          <button>Edit</button>
          <button onClick={()=> handleRecipesDelete(id)}>Delete</button>
        </div>
      </header>
      <div>
        <span>Cook Time: {cookingTime}</span><br/>
        <span>Servings: {servings}</span>
      </div>
      <div>
        <h5>Instructions</h5>
        <span>{Instructions}</span>
      </div>
      <div>
        <h5>Ingredients:</h5>
        <IngredientList Ingredients={Ingredients}/>
      </div>
    </div>
  )
}

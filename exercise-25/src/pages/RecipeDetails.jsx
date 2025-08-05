import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { RecipeList } from '../components/RecipeListAndCategories'
useNavigate
const RecipeDetails = () => {
  const {recipe_id}=useParams()
  const recipeInfo=RecipeList.filter(recipe=>recipe.id==recipe_id)[0]
  const {ingredients}=recipeInfo
  const { instructions}=recipeInfo
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate(-1)
  }
  return (

    <div className='max-w-2xl mx-auto bg-white p-8 rounded-lg shadow'>
      <button onClick={handleClick} className='text-rose-700 font-bold text-lg p-2 mb-4 cursor-pointer'>🡨 Back to Recipes </button>
      <h1 className='font-bold text-lg mb-4'>Sample Recipe</h1>
      <div className='flex justify-between' >
      
        <div>
          <h1 className='text-lg mb-4 font-bold'>Ingredients</h1>
          <ul>
            {
              ingredients? 
              ingredients.map(ingredient=>(
                    <li>{ingredient}</li>
              )):"There is No ingradiants"
            }
          </ul>
        </div>
        <div>
          <h1 className='text-lg mb-4 font-bold'>Instructions</h1>
          <ul>
            {
              instructions ?
              instructions.map(instruction=>(
                    <li>{instruction}</li>
              )):"No instractions"
            }
            </ul>
        </div>
      
      </div>
      
    </div>
  )
}

export default RecipeDetails
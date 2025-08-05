import React from 'react'
import { RecipeList } from '../components/RecipeListAndCategories'
import { Link } from 'react-router'
const Recipes = () => {
  return (
    <div>
      <h1 className='px-3 mb-4 font-bold text-2xl'>All Recipes</h1>
    <div className='grid gid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3'>
      
      {
        RecipeList.map(recipe=>(
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className='bg-white p-4 shadow-lg rounded-lg w-60'>
              <h1 className='text-lg font-bold mb-2'>{recipe.title}</h1>
              <p className='text-sm text-gray-600 mb-2'>{recipe.description}</p>
              <div>

              <span className='font-bold inline-block text-red-600 text-md bg-rose-200 px-2 py-1 rounded-lg'>{recipe.category}</span>
              </div>
          </Link>
        ))
      }
    </div>
  </div>
  )
}

export default Recipes
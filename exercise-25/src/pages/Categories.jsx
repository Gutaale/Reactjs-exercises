import React from 'react'
import { categories, RecipeList } from '../components/RecipeListAndCategories'
import { Link, useParams } from 'react-router'
const Categories = () => {
  const { category_id } = useParams()
  const recipeInfo=RecipeList.filter(recipe=>recipe.category==category_id)[0]
  return (
    <div className='max-w-2xl mx-auto flex flex-col gap-4'>
      <div className=' bg-white p-8 rounded-lg shadow'>
        {
            categories.map(categ=>(
                <Link to={`/categories/${categ.id}`} key={categ.id} className='mb-4 block hover:bg-rose-200 cursor-pointer p-3 rounded-lg '>
                  <h1 className='font-bold text-xl '>{categ.name}</h1>
                  <span className='block text-sm '>{categ.description}</span>
                  
                  </Link>
            ))
        }
        </div>
          {
            recipeInfo && 
            
        <div className=' bg-white p-8 rounded-lg shadow'>

            <h1 className='font-bold text-lg mb-4 block'>{recipeInfo.category.charAt(0).toUpperCase() + recipeInfo.category.slice(1) } Recipes</h1>
        <Link to={`/recipe/${recipeInfo.id}`} className='block border-1 border-red-500 p-2 rounded-lg'>
            <h1 className='font-semibold text-lg mb-4'>
              {
                recipeInfo.title
              }
              </h1>
            <p className='text-sm '>
              {
                recipeInfo.description
              }
              </p>
        </Link>
              
        </div>
          }
          
    </div>
    
  )
}

export default Categories
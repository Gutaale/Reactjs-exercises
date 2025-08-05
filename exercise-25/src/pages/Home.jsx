import React from 'react'
import { Link, Links } from 'react-router'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <h1 className='font-bold text-2xl text-center mb-4'>Welcome to Recipe Book</h1>
      <p className='font-md text-sm text-gray-700 mb-4'>Discover delicious recipes and start cooking today. </p>
      <div className='flex justify-center items-center space-x-7'>
        <Link to="recipes" className='w-60  h-26 flex flex-col justify-center items-center bg-red-500 text-white p-4 rounded-lg'>
          <h1 className='text-xl font-bold'>Brows Recipes</h1>
          <p className='text-sm text-center'>Explore our collection of delicious recipes</p>
        </Link>
        <Link to='categories' className='w-60 h-26 flex flex-col justify-center items-center bg-red-500 text-white p-4 rounded-lg'>
          <h1 className='text-xl font-bold'>Recipe Categories</h1>
          <p className='text-sm text-center'>Find recipes by category</p>
        </Link>
        
      </div>
    </div>
  )
}

export default Home
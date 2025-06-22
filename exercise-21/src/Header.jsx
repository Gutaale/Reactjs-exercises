import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-white shadow-lg rounded-2xl p-6 mb-6'>
        <div className='flex gap-0.5 flex-col'>
            <h1 className='font-bold text-xl text-gray-900'>Welcome back, Student!</h1>
            <p className='text-sm text-gray-600 '>
                Here's what happining to your courses today.
            </p>
        </div>
        <div className='flex justify-between items-center gap-2'>
            <div className='flex justify-center relative'>
                <span className='absolute -top-1 -right-1 bg-red-600 w-2 h-2 rounded-full'></span>
                <span>🔔</span>
            </div>
            <span className='flex justify-center items-center w-8 h-8 text-sm font-bold text-white bg-gradient-to-r from-purple-400 to-pink-500 rounded-full'>s</span>
        </div>
    </div>
  )
}

export default Header
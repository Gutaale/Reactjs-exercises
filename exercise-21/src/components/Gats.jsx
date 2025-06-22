import React from 'react'

const Gats = ({stat}) => {
  return (
    <div className='bg-white shadow-lg rounded-2xl flex  items-center p-4 gap-2 '>
        <div>
            {stat.icon}
        </div>
        <div>
            <h1 className='text-sm  text-gray-600'>{stat.label}</h1>
            <span className='font-bold text-gray-900'>{stat.value}</span>
        </div>
    </div>
  )
}

export default Gats
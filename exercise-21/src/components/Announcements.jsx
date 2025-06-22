import React from 'react'

const Announcements = ({announcement}) => {
  return (
    <div>
      {
        <div className='border-l-4 border-blue-600 pl-4'>
        <h1 className='text-lg font-bold text-gray-950 '>{announcement.title}</h1>
        <p className='text-sm text-gray-700'>{announcement.message}</p>
        <span className='text-sm text-gray-500'>{announcement.time}</span>
        </div>
      }
    </div>
  )
}

export default Announcements
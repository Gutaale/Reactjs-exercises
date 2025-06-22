import React from 'react'

const CoursesInfo = ({course}) => {
  return (
    <>
    <div className='flex justify-between items-center mb-2'>
        <h3 className='font-medium text-gray-800'>{course.name}</h3>
        <span className='text-sm text-gray-500'>{course.progress}% </span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
            <div
            className={`h-2.5 rounded-full bg-${course.color}-500 `}
            style={{ width: `${course.progress}%` }}></div>
            <div
            className={`h-3 rounded-full bg-blue-500 absolute -top-0.5`}
            style={{ width: `${course.progress}%` }}></div>
    </div>
    <div className="mt-2 flex justify-between text-sm">
                      <span className="text-gray-500">Next: {course.nextLesson}</span>
                      <span className="text-gray-500">{course.instructor}</span>
    </div>
                  
    </>
  )
}

export default CoursesInfo
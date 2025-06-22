import React from 'react'

const UpCommingAssignments = ({assignment}) => {
  return (
    <>
        <div className='flex justify-between items-center'>
            <div className=''>
                      <h3 className="font-medium text-gray-800">{assignment.title}</h3>
                      <p className="text-sm text-gray-500">{assignment.course}</p>
            </div>
            <div className="text-right">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                ${assignment.status === 'completed' ? 'bg-green-100 text-green-800' :
                    assignment.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                }`}>
                {assignment.status}
                </span>
                <p className="text-xs text-gray-500 mt-1">Due {assignment.dueDate}</p>
            </div>
        </div>
        
    </>
  )
}

export default UpCommingAssignments
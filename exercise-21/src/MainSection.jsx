import React from 'react'
import Gats from './components/Gats'
import CourseInfo from './components/CoursesInfo'
import {stats, announcements, assignments, courses} from './Cources'
import UpCommingAssignments from './components/UpCommingAssignments'
import Announcements from './components/Announcements'
const MainSection = () => {
  return (
    <div className='flex flex-col'>
        {/* Stat gates */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-2' >
            {
                stats.map(stat=>(
                    <Gats key={stat.index}  stat={stat}/>
                ))
            }
            
        </div>
        {/* main content  */}
        <div className='grid lg:grid-cols-3 gap-2 mt-4'>
            {/* left side Courses */}
            <div className='bg-white h-fit shadow-lg rounded-lg p-3 lg:col-span-2'>
                <h1 className='font-bold text-xl text-gray-600'>Course Progress</h1>
                    {
                        courses.map(course=>(
                            <div className='bg-gray-50 rounded-lg p-2 mb-2'>
                            < CourseInfo key={course.id} course={course} />
                            </div>
                        ))
                    }
            </div>
            {/* right side Assignments and Announcements  */}
            <div className='shadow-lg rounded-lg flex flex-col items-center gap-3 '>
                <div className='bg-white h-fit w-full rounded-2xl p-3'>
                    <h1 className='text-lg font-bold text-gray-900'>Upcomming Assignements</h1>
                    {
                        assignments.map(assignment=>(
                            <div className='my-3'>
                            <UpCommingAssignments key={assignment.id} assignment={assignment} />
                            </div>
                            
                        ))
                    }
                </div>
                <div className='bg-white w-full h-fit rounded-2xl p-3'>
                    <h1 className='text-lg font-bold text-gray-900'>Announcements</h1>
                    {
                        announcements.map(announcement=>(
                            <div className='my-3'>
                            <Announcements key={announcement.id} announcement={announcement} />
                            </div>
                            
                        ))
                    }
                </div>
            </div>


        </div>
        
        
    </div>
  )
}

export default MainSection
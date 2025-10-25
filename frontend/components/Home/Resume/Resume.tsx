import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaReact } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'

const Resume = () => {
  return (
    <div className='pt-20 pb-16'>
      <div className='w-[90%] sm:w-[70%] mx-auto grid-cols-1 xl:grid-cols-2 gap-10'>
        {/* WORK PART */}
        <div>
            <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                My Work <span className='text-cyan-200'>Experience</span>
            </h1>
            <div className='mt-10'>
              <ResumeCard Icon={FaCodepen} role="Full-Stack Developer" />
              <ResumeCard Icon={FaReact} role="Front-End Developer" />
              <ResumeCard Icon={BsDatabase} role="Back-End Developer" />
            </div>
        </div>
        {/* EDUCATION PART */}
        <div> <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                My <span className='text-cyan-200'>Education</span>
            </h1>
          </div>
      </div>
      
    </div>
  )
}

export default Resume

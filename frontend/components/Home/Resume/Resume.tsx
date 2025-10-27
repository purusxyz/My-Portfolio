import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaReact } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'
import { BiBadge } from 'react-icons/bi'

const Resume = () => {
  return (
    <div className='pt-20 pb-16'>
      <div className='w-[90%] sm:w-[70%] mx-auto grid-cols-1 xl:grid-cols-2 gap-10'>
        {/* WORK PART */}
        <div>
            <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                My Work <span className='text-cyan-200'>Experience</span>
            </h1>
            <div 
            className='mt-10'
            data-aos="zoom-in"
            data-anchor-placement="top-center"
             >
              <ResumeCard Icon={FaCodepen} role="Full-Stack Developer" />
              <ResumeCard Icon={FaReact} role="Front-End Developer" />
              <ResumeCard Icon={BsDatabase} role="Back-End Developer" />
            </div>
        </div>
        {/* EDUCATION PART */}
        <div> <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                My <span className='text-cyan-200'>Education</span>
            </h1>
            <div
              className='mt-10'
              data-aos="zoom-out"
              data-anchor-placement="top-center"
              data-aos-delay="300"
              >
              <ResumeCard 
                Icon={BiBadge}
                role="Sodepur Colliery High School "
                date='Jan 2012 - Mar 2018'
                   />
              <ResumeCard
                Icon={FaReact}
                role="Burnpur Boy&apos;s High School"
                date='May 2018 - Jun 2020' />
              <ResumeCard
                Icon={BsDatabase}
                role="University Institute of Technology Burdwan"
                date='Sept 2022 - june 2026 ' />
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default Resume

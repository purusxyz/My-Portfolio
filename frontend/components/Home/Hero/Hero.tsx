"use client"
import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';
import ParticlesHero from './ParticleBg';


const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>

<ParticlesHero />

      <div className='relative z-10 flex flex-col items-center'>
        <Image
          src="/Images/profile.jpg"
          alt='heroimage'
          width={150}
          height={150}
          className='rounded-full border-3 border-red-500' 
          data-aos="fade-up"
          />
          <h1 data-aos="fade-up" data-aos-delay="200" className='text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 text-center font-bold tracking-wide'>
             Designing and developing <br />
             modern web products that connect <br />
             <span className='text-cyan-200'>  ideas to innovation.</span>
          </h1>
          <h2 data-aos="fade-up" data-aos-delay="400" className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center'>
              Hi! I&apos;m Purusottam- A passionate
               <Typewriter options={{
                strings: [
                  'Frontend Developer',
                  'Backend Developer',
                  'Web Developer',
                  'Full Stack Web Developer'
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: 'pl-2'
               }}
              />
          </h2>
          <button 
          data-aos="fade-up" 
          data-aos-delay="600" 
          className='mt-6 px-5 py-2 bg-red-500 hover:bg-green-500 transition-all duration-300
          cursor-pointer rounded-full text-lg font-medium'>
            <span>See my work</span>
            <BsArrowRight className='w-5 h-5 ml-2 inline-block' />
          </button>
      </div> 
    </div>
  )
}

export default Hero

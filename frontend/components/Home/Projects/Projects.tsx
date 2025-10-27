import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            A small selection of recent <br />{" "}
            <span className='text-cyan-300'>projects</span>
        </h1>
        <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
            {/* 1st project */}
            <div data-aos="fade-up"
              data-anchor-placement="top-center"
              data-aos-delay="0">
                <Image
                src="/Images/p1.jpg"
                alt='img'
                width={800}
                height={650}
                className="rounded-lg"
                 />
                 <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                    Modern Finance Dashboard UI
                 </h1>
                 <h1 className='pt-2 font-medium text-white/80 '>Apps, UI/UX</h1>
            </div>
             {/* 2nd project */}
            <div data-aos="fade-up"
              data-anchor-placement="top-center"
              data-aos-delay="100">
                <Image
                src="/Images/p2.jpg"
                alt='img'
                width={800}
                height={650}
                className="rounded-lg"
                 />
                 <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                    Portfolio Website for Creatives
                 </h1>
                 <h1 className='pt-2 font-medium text-white/80 '>Apps, UI/UX</h1>
            </div>
             {/* 3rd project */}
            <div data-aos="fade-up"
              data-anchor-placement="top-center"
              data-aos-delay="200">
                <Image
                src="/Images/p3.jpg"
                alt='img'
                width={800}
                height={650}
                className="rounded-lg"
                 />
                 <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                    Brand Identity for Startups
                 </h1>
                 <h1 className='pt-2 font-medium text-white/80 '>Apps, UI/UX</h1>
            </div>
             {/* 4th project */}
            <div data-aos="fade-up"
              data-anchor-placement="top-center"
              data-aos-delay="300">
                <Image
                src="/Images/p4.jpg"
                alt='img'
                width={800}
                height={650}
                className="rounded-lg"
                 />
                 <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                    SaaS Dashboard Developmemt
                 </h1>
                 <h1 className='pt-2 font-medium text-white/80 '>Apps, UI/UX</h1>
            </div>
        </div>
    </div>
  )
}

export default Projects

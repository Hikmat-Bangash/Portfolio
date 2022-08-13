import React from 'react'
import Projects from './projects'

const Experience = () => {
  return (
    <section id='portfolio' className='Experience w-full relative top-14 bg-gradient-to-r from-gray-900 to-gray-800 z-10'>
    <div className="flex justify-center py-16 lg:py-8 mb-6">
      <div class="md:text-3xl text-2xl font-bold top-4 ">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-cyan-500 to-violet-500 border-b-2 tracking-widest">
          Portfolio
        </span>
      </div>
    </div>

  <div className="container mx-auto">
  <div className='flex flex-col items-center text-center'>
      
          <p className='subtitle text-white mb-8'>
          The following are some recent projects I have worked on.
          </p>
        </div>
        <Projects/>    
  </div>

    </section>
  )
}

export default Experience
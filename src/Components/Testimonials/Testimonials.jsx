import React from 'react'
import TestiSlider from './TestSlider'

const Testimonials = () => {
  return (
    <>
    <section id='testimonial' className='Testimonials w-full pb-10 relative top-14 bg-gray-900 z-10'>
    <div className="flex justify-center py-10 sm:py-16 lg:py-8">
      <div class="md:text-3xl text-2xl  font-bold tracking-widest top-4 ">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-cyan-500 to-violet-500 border-b-2">
          Testimonials
        </span>
      </div>
    </div>
    <div className='flex flex-col items-center text-center mt-2 mb-5'>
          <h2 className='text-2xl text-cyan-600 leading-4'>
            What other people say
          </h2>
          <p className='text-md text-white font-thin mt-3'>
          Below are some of the reviews and feedback received from customers and clients:
          </p>
        </div>


  <TestiSlider/>
    </section>
    </>
  )
}

export default Testimonials
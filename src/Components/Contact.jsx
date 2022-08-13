import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="Contact w-full relative top-10 sm:top-14 bg-gradient-to-t from-gray-900 to-gray-800 z-10"
    >
      <div className="flex justify-center py-5 sm:py-16 lg:py-8">
        <div class="md:text-3xl text-2xl font-bold top-4 tracking-widest ">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-cyan-500 to-violet-500 border-b-2">
            Contact
          </span>
        </div>
      </div>

      
      
      <div className='container w-[90vw]  mx-auto mt-8'>
        <div
          className='flex flex-col justify-center lg:gap-x-8 lg:flex-row'
        >

          <form action="https://formspree.io/f/mvoyokae"  method="POST"
            className='space-y-8 w-full max-w-[780px] mb-16'
          >
            <div className='flex gap-8 sm:flex-row flex-col'>
              <input className='input' name="Name" type='text' required placeholder='Your Fullname' />
              <input className='input' name="Email" type='email' required placeholder='Your Email' />
            </div>
            <input className='input' name="Subject" required type='text' placeholder='Subject' />
            <textarea required
              className='textarea'
              name="Message"
              placeholder='Your message'
            ></textarea>
            <button type="submit" className='btn btn-lg border-2 border-double border-pink-500 hover:border-0 hover:bg-cyan-500 rounded-md duration-500'>
              Send message
            </button> 
          </form>
        </div>
      </div>

    </section>
  );
};

export default Contact;

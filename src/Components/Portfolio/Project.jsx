import React from 'react';

const Project = ({ item }) => {
  return (
    <>
    <div key={item.id} className='flex flex-col mx-auto items-center md:w-[20rem] w-[18rem] sm:w-[22rem] shadow-inner shadow-gray-500 bg-slate-900 rounded-2xl py-4 text-center text-white mb-10'>
      <div className='mb-5'>
        <img className='rounded-2xl w[6rem] h-[12rem] sm:h-auto sm:w-[17rem]' src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      {/* <p className='text-base max-w-md'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam
        obcaecati ipsam.
      </p> */}
      <div className="w-full mt-2 flex justify-around items-center ">
         <button className='bg-gray-800 rounded-md px-2 font-light text-white opacity-70 hover:opacity-100 tracking-wide'> Demo</button>
         <button className='bg-gray-800 rounded-md px-2 font-extralight text-white opacity-70 hover:opacity-100  tracking-wide'> Code</button>
      </div>
    </div>
</>

  );
};

export default Project;

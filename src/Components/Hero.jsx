import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
// --------- importing icons ------
import FreelancerBrandIcon from '../assets/brands/freelancer.png'
import UpworkBrandIcon from '../assets/brands/upwork.png'
import FiverBrandIcon from '../assets/brands/fiverr.png'

import mypic from "../assets/img/hikmatpic.png";

const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
];



const Hero = () => {
  return (
    <section
      id="home"
      className="w-full  xl:h-[96vh] relative top-14 bg-gradient-to-b from-gray-700 to-black  z-0 "
    >
      <div className="container mx-auto h-[70vh] lg:h-[85vh] ">
        <div className="flex justify-around items-center h-full pt-10 md:-mt-20 xl:-mt-16">
          <div className="hidden md:flex flex-1 justify-center items-center h-full">
            <img src={mypic} alt="MY_PICTURE" className="object-cover rounded-b-md" />
          </div>

          <div className="flex-1 flex flex-col justify-center items-center md:justify-start md:items-start">
            <p className="text-lg font-semibold text-pink-400  mb-[10px]">
              Hey There 👋, I'm Hikmat Bangash
            </p>
            <h1 className="text-2xl text-cyan-400 leading-[44px] md:text-3xl md:leading-tight lg:text-4xl lg:leading-[1.2] font-bold tracking-widest md:tracking-wide">
              Full Stack Developer
            </h1>
            <p className="text-lg font-semibold text-pink-400 mt-2 md:tracking-widest">
              Fast Learner & Flexible Developer
            </p>
            <div className="pt-2 pb-8 max-w-[480px] text-xl font-bold text-center text-cyan-400">
              <h3 className="tracking-widest">                
                Freelance:
                <span className="text-white opacity-80 text-xl ml-2 font-semibold">
                  <Typed
                    className="typed"
                    strings={[
                      "Full-Stack Developer",
                      "Tailwind, Bootstrap, MaterialUI",
                      "JavaScript, Reactjs Developer",
                      "Redux, Zustand",
                      "Node.js, Express.js",
                      "MongoDB, MYSQL"
                    ]}
                    typeSpeed={100}
                    backSpeed={80}
                    loop
                  />
                </span>
              </h3>
            </div>

       <div className="button flex justify-between mb-10 lg:mt-0 ">
          <Link className="hover:bg-gray-800 border-2 border-cyan-500 mt-7 py-0 rounded-full text-lg font-thin tracking-wider text-white px-6 transition-all duration-200 cursor-pointer"
             
             to={"contact"}
             spy={true}
             smooth={true}
             duration={300}
             offset={-80}
            >
            Contact
            </Link>
            {/* for portfolio */}

            <Link className="hover:bg-gray-800 border-2 border-cyan-500 ml-3 mt-7 py-0 rounded-full text-lg font-thin tracking-wider text-white px-6 transition-all duration-200 cursor-pointer"
             
             to={"portfolio"}
             spy={true}
             smooth={true}
             duration={300}
             offset={-80}
            >
            Portfolio
            </Link>
            </div>

          </div>
          
        </div>     
      </div>
      {/* freelancing platforms */}
      <div className=" w-full pb-3 lg:mt-0 -mt-[6.5rem] md-mt-6 flex justify-center bg-gradient-to-b from-gray-900 to-black">
        <div className="flex justify-around items-center w-full md:w-[80vw] ">
        {brands.map((brand)=>(
          <div key={brand.img} className="platforms">
           <img className="object-cover w-[6rem] md:w-full" src={brand.img} alt="brandpic" />
          </div>
       ))}

        </div>
      </div>
    </section>
  );
};

export default Hero;

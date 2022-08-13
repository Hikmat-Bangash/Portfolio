import React, { useState } from "react";
import Nav from "./Nav";
import SocialIcons from "./SocialIcons";
import {FiMenu} from 'react-icons/fi';

import { Link } from "react-scroll";

// navigations
const navigation = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Experience",
    href: "experience",
  },
  {
    name: "Portfolio",
    href: "portfolio",
  },
  {
    name: "Testimonial",
    href: "testimonial",
  },
  {
    name: "Contact",
    href: "contact",
  },
];

const Header = () => {
  const [toggle, settoggle] = useState(false);
  

  return (
    <>
      <div className="z-30 h-20 md:h-17 w-full fixed overflow-hidden bg-gray-800 shadow-lg ">
        {/* navigation bar */}
        <div className="flex justify-around items-center p-3 backdrop-blur-2xl">
          <div className="logo">
          <div className="md:text-3xl text-2xl font-bold top-4 -tracking-wide ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-pink-500 to-white">
            HB
          </span>
        </div>
          </div>
      {/*-------- MENU -----------  */}
      <Nav/>

          {/* social icons */}
            <SocialIcons/>
          
          {/* icon for mobile on/off  */}
          <div className="md:hidden z-50 cursor-pointer text-3xl">
            <FiMenu onClick={() => settoggle(!toggle)} className="p-2 text-[43px] text-blue-400 z-50"  />
          </div>
        
        </div>
      </div>
      {/* ------------------------------------------ */}

 {/* for mobile navigation bar  */}
    {toggle &&
      <div
        className=
          "fixed md:hidden top-16 z-50 h-screen w-full bg-gradient-to-t from-slate-800 to-gray-900"
      >
        <ul className="relative pb-16 sm:pb-0 flex flex-col justify-center items-center space-y-12 sm:space-y-16 text-2xl h-screen font-mono font-bold text-gray-400 ">
        {navigation.map((item, idx) => {
          return (
            <li
              className='hover:text-white cursor-pointer'
              key={idx}
            >
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={300}
                offset={-80}
                className='transition-all duration-400'
                onClick={() => settoggle(false)}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
         
     </ul>
      </div>
      }
    </>
  );
};

export default Header;

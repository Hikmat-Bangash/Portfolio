import React from 'react';
import {
  FiFacebook,
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiTwitter
} from 'react-icons/fi';

//   ----- SOCIAL ICONS -------------
const socialIcons = [
  {
    icon: <FiLinkedin/>,
    href: "https://www.linkedin.com/in/hikmat-bangash-84415821a/",
  },
  {
    icon: <FiGithub/>,
    href: "https://github.com/Hikmat-Bangash",
  },
  {
    icon: <FiInstagram/>,
    href: "https://www.instagram.com/hikmatbangash88/",
  },
  {
    icon: <FiFacebook/>,
    href: "https://web.facebook.com/hikmatkhan.bangash/",
  },
  {
    icon: <FiTwitter/>,
    href: "https://twitter.com/HikmatkhanBang5",
  }
];


const Footer = () => {
  return (
    <footer className='w-full bg-gradient-to-t from-gray-900 to-black pt-20'>
      <div className='container mx-auto pb-5'>
        <div className='flex items-center justify-around'>
         
        <div class="md:text-3xl text-2xl font-bold -tracking-wide ">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-500 to-white">
            HB
          </span>
        </div>
         
          <div className='flex space-x-6 items-center justify-center'>
            {socialIcons.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-pink-400 text-xl hover:text-cyan-500 hover:scale-125 duration-300' href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          
          <p className=' hidden md:block text-pink-400 text-md'>
            &copy;2022 Hikmat Bangash
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react'
import {
    FiFacebook,
    FiLinkedin,
    FiInstagram,
    FiGithub
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
    }
  ]
  

const SocialIcons = () => {
  return (
    <>
    <ul className="flex text-xl font-mono text-purple-800 space-x-4 z-40">
            {socialIcons.map(({icon, href})=>(
              <li key={href} className="text-cyan-500 hover:scale-125 duration-300">
              <a href={href} target="_blank">{icon}</a>
            </li >
            ))}
           
          </ul>
    
    </>
  )
}

export default SocialIcons
import React from "react";
// import Link
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

const Nav = () => {
  return (
    <>
      {/* menu */}
      <ul className="hidden md:flex text-md font- text-white space-x-5 tracking-widest">
        {navigation.map((item, idx) => {
          return (
            <li className=" hover:text-cyan-500 cursor-pointer" key={idx}>
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={400}
                offset={-80}
                className="transition-all duration-400"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Nav;

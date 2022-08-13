import React, { useState, useEffect } from "react";

import { FiArrowUp } from "react-icons/fi";
// import link
import { animateScroll as scroll } from "react-scroll";
// import icon
// import { ChevronUpIcon } from '@heroicons/react/outline';

const BackTopBtn = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 500 ? setShow(true) : setShow(false);
    });
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  {
    return (
      show && (
        <button
          onClick={() => scrollToTop()}
          className="z-40 bg-cyan-500 hover:bg-pink-400 text-white w-9 h-9 sm:w-11 sm:h-11 rounded-full fixed right-6 md:right-20 bottom-14 sm:bottom-22 cursor-pointer flex justify-center items-center transition-all"
        >
          <FiArrowUp className="w-6 h-6" />
        </button>
      )
    );
  }
};

export default BackTopBtn;

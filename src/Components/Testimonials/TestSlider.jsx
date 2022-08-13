import React from "react";
// testimonials data
// import { testimonials } from '../data';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

import TestiImage1 from "../../assets/testimonials/testimonial-1.webp";
import TestiImage2 from "../../assets/testimonials/testimonial-2.webp";
import TestiImage3 from "../../assets/testimonials/testimonial-3.webp";

// testimonials
const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it. Hikmat is always looking forward to new challenges in development era.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

const TestiSlider = () => {
  return (
    <>
      

      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Pagination]}
        className="Myswiper"
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName, authorPosition } = item;
          return (
            
            <SwiperSlide key={index}>
              <div className=" mt-10 mb-16 flex flex-col w-full justify-center items-center lg:flex-row gap-12 lg:gap-28 text-white">
                <div className="w-[250px] h-[250px] sm:w-[328px] sm:h-[328px]">
                  <img className="rounded-2xl" src={authorImg} alt="" />
                </div>

                <div className=" lg:w-[40rem] flex flex-col justify-center items-center lg:items-start">
                  <h5 className="text-md sm:text-xl mb-4 sm:mb-8 italic font-thin">
                    {authorText}
                  </h5>
                  <div>
                    <p className="text-lg text-cyan-500">{authorName}</p>
                    <p className="text-pink-500">{authorPosition}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestiSlider;

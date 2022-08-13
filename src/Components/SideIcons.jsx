import React from "react";
// importing images
import callicon from "../assets/contactIcons/caller.png";
import whatsapp from "../assets/contactIcons/whatsapp.png";
import email from "../assets/contactIcons/email.png";

const contactIcons = [
  {
    index: 1,
    img: whatsapp,
    link: "https://wa.me/923319395175",
    style: "w-[35px]"
  },
  {
    index: 2,
    img: email,
    link: "mailto:engrhikmatbangash@gmail.com",
    style: "w-[40px]"
  },
  {
    index: 3,
    img: callicon,
    link:"Tel:923449136048",
    style: "w-[40px]"
  }
]

const SideIcons = () => {
  return (
    <>
      <div className="hidden fixed lg:block z-50 top-[16rem]">
        <div className=" flex flex-col items-center justify-center">
        {contactIcons.map(({index,img,link,style})=>(
          <div key={index} className="pb-2">          
            <a href={link} target='_blank'>             
              <img className={`${style} duration-500 opacity-60 hover:opacity-100`} src={img} alt="" />
            </a>
          </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default SideIcons;

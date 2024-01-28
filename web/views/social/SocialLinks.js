import { THEME_COLOR } from "@/constant/color.constant";
import NavigationHandler from "@/handler/NavigationHandler";
import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const SocialLinks = () => {
   const {
     navigateToLinkedin,
     navigateToInstagram,
     navigateToGithub,
     navigateToFacebook,
     navigateToTwitter,
  } = NavigationHandler();
  
  const btnStyle = `p-3 bg-blue-500 text-white rounded-xl shadow-blue-300 shadow-md cursor-pointer hover:bg-blue-50 hover:text-blue-500 transition-all duration-500 hover:shadow-blue-500`;

  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="w-1 h-20 bg-blue-500 rounded-md mb-3" />
      <button className={btnStyle} onClick={navigateToLinkedin}>
        <FaLinkedinIn />
      </button>
      <button className={btnStyle} onClick={navigateToGithub}>
        <FaGithub />
      </button>
      <button className={btnStyle} onClick={navigateToInstagram}>
        <FaInstagram />
      </button>
      <button className={btnStyle} onClick={navigateToFacebook}>
        <FaFacebookF />
      </button>
      <button className={btnStyle} onClick={navigateToTwitter}>
        <FaTwitter />
      </button>
    </div>
  );
};

export default SocialLinks;

import NavigationHandler from "@/handler/NavigationHandler";
import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const SocialIcons = () => {
  const {
    navigateToLinkedin,
    navigateToInstagram,
    navigateToGithub,
    navigateToFacebook,
    navigateToTwitter,
  } = NavigationHandler();

  const iconStyle = `p-3 bg-gray-100 bg-opacity-10 text-white rounded-full cursor-pointer hover:text-blue-500 transition-all duration-300`;

  return (
    <div className="flex gap-2 items-center justify-center lg:justify-start">
      <button className={iconStyle} onClick={navigateToLinkedin}>
        <FaLinkedinIn />
      </button>
      <button className={iconStyle} onClick={navigateToGithub}>
        <FaGithub />
      </button>
      <button className={iconStyle} onClick={navigateToInstagram}>
        <FaInstagram />
      </button>
      <button className={iconStyle} onClick={navigateToFacebook}>
        <FaFacebookF />
      </button>
      <button className={iconStyle} onClick={navigateToTwitter}>
        <FaTwitter />
      </button>
    </div>
  );
};

export default SocialIcons;

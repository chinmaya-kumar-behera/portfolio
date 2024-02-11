import NavigationHandler from '@/handler/NavigationHandler';
import React from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const SocialIcons = () => {
        const { navigateToLinkedin, navigateToInstagram,
        navigateToGithub, navigateToFacebook, navigateToTwitter, } = NavigationHandler();
    
      const iconStyle = `p-3 bg-blue-500 text-white rounded-full shadow-blue-300 cursor-pointer hover:bg-blue-50 hover:text-blue-500 transition-all duration-500 `;
    
  return (
    <div className="flex gap-2 items-center">
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
}

export default SocialIcons
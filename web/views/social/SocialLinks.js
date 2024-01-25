import { THEME_COLOR } from '@/constant/color.constant';
import React from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
    const btnStyle = `p-3 bg-blue-500 text-white rounded-xl shadow-blue-300 shadow-md cursor-pointer hover:bg-blue-50 hover:text-blue-500 transition-all duration-500 hover:shadow-blue-500`;
  return (
      <div className="flex flex-col gap-2 items-center">
          <div className='w-1 h-20 bg-blue-500 rounded-md mb-3'>
              
          </div>
      <button className={btnStyle}>
        <FaLinkedinIn className=''/>
      </button>
      <button className={btnStyle}>
        <FaGithub />
      </button>
      <button className={btnStyle}>
        <FaInstagram />
      </button>
      <button className={btnStyle}>
        <FaFacebookF />
      </button>
      <button className={btnStyle}>
        <FaTwitter />
      </button>
    </div>
  );
}

export default SocialLinks
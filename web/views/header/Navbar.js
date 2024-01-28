import React from 'react'
import logo from '../../_asssets/logo/ck-logo.png'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center z-10">
      <div className="flex items-center gap-3 py-2">
        <div className="relative h-[70px] w-[70px]">
            <Image src={logo} fill={true} className="absolute h-full w-full object-cover object-center" />
          </div>
        <span className="text-3xl font-barlow-semi-condensed font-bold tracking-wider text-gray-600">
          CHINMAYA KUMAR
        </span>
      </div>
      <div className="py-5">
        <ul className="flex items-center gap-10 text-gray-700 cursor-pointer font-barlow-semi-condensed">
          <li className="hover:text-blue-500 transition-all">HOME</li>
          <li className="hover:text-blue-500 transition-all">ABOUT</li>
          <li className="hover:text-blue-500 transition-all">EXPERIENCE</li>
          <li className="hover:text-blue-500 transition-all">PROJECTS</li>
          <li className="hover:text-blue-500 transition-all">CONTACT</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center z-10">
      <div className="flex items-center">
        <img
          src="https://websitedemos.net/portfolio-02/wp-content/uploads/sites/864/2021/05/logo-regular-free-img.png"
          alt="logo"
        />
      </div>
      <div className="py-5">
        <ul className="flex items-center gap-10 text-gray-700 cursor-pointer font-barlow-semi-condensed">
          <li className="hover:text-blue-500 transition-all">HOME</li>
          <li className="hover:text-blue-500 transition-all">ABOUT</li>
          <li className="hover:text-blue-500 transition-all">SERVICE</li>
          <li className="hover:text-blue-500 transition-all">CONTACT</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar
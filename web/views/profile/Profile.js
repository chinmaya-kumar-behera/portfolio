import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Profile = () => {
  
  return (
    <section className="flex justify-between mt-10 pl-5 mb-10">
      <div className="w-1/2 flex flex-col justify-center gap-8">
        <div className="space-y-4 text-lg text-gray-500">
          <TypeAnimation
            sequence={["HELLO, MY NAME IS"]}
            wrapper="span"
            speed={50}
            repeat={1}
            cursor={true}
          />
          <div className="h-[2px] bg-gray-400 w-8 rounded"></div>
        </div>

        <div className="space-y-10 font-serif">
          <div className="h-[50px]">
            <TypeAnimation
              sequence={[1000, "Chinmaya Kumar"]}
              wrapper="span"
              speed={5}
              className="text-7xl font-extrabold font-playfair"
              repeat={1}
              cursor={false}
            />
          </div>
          <h5 className="text-3xl font-bold text-gray-500">
            Full Stack Developer
          </h5>
        </div>

        <div className="flex mt-10">
          <button
            className="px-10 py-4 rounded-xl font-bold text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:shadow-xl"
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="h-[630px] w-[630px] overflow-hidden relative">
        <img
          src="https://websitedemos.net/portfolio-02/wp-content/uploads/sites/864/2021/05/about-01-free-img.jpg"
          alt="profile_image"
          className="object-cover object-center rounded-full"
        />
      </div>
    </section>
  );
}

export default Profile
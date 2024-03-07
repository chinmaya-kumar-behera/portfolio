import { ContactButton } from '@/components/shared';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Profile = () => {
  
  return (
    <section
      id="profile-section"
      className="flex flex-col items-between h-full"
    >
      <div className="hidden h-full lg:flex justify-between items-end lg:pl-5">
        <div className="w-1/2 h-full lg:flex flex-col justify-center gap-8 ">
          <div className="space-y-4 text-lg text-gray-200">
            <TypeAnimation
              sequence={["HELLO, MY NAME IS"]}
              wrapper="span"
              speed={50}
              repeat={1}
              cursor={true}
            />
            <div className="h-[2px] bg-gray-200 w-10 rounded"></div>
          </div>

          <div className="space-y-10 font-serif">
            <div className="h-[50px]">
              <TypeAnimation
                sequence={[1000, "Chinmaya Kumar"]}
                wrapper="span"
                speed={5}
                className="text-5xl xl:text-7xl font-extrabold font-playfair"
                repeat={1}
                cursor={false}
              />
            </div>
            <h5 className="text-3xl font-bold text-gray-200 text-shadow-sm">
              Full Stack Developer
            </h5>
          </div>

          <div className="flex mt-10">
            <ContactButton className={"px-7 py-3"} />
          </div>
        </div>

        <div className="block h-[630px] w-[630px] overflow-hidden relative">
          <img
            // src="https://websitedemos.net/portfolio-02/wp-content/uploads/sites/864/2021/05/about-01-free-img.jpg"
            src="https://10web-site.ai/17/wp-content/uploads/sites/19/2024/02/MAIN_NiOAKptj.webp"
            alt="profile_image"
            className="object-cover object-center h-full w-full"
          />
        </div>
      </div>

      {/* mobile screen it will be visible */}
      <div className="lg:hidden h-auto relative rounded-3xl md:flex justify-center mt-10">
        <div className="z-10 flex justify-center">
          <div className="w-[300px] lg:flex pt-5 px-5 flex-col justify-center items-center gap-8">
            <div className="space-y-4 text-md text-gray-500 h-[40px] text-center">
              <TypeAnimation
                sequence={["HELLO, MY NAME IS"]}
                wrapper="span"
                speed={50}
                repeat={1}
                cursor={true}
              />
              <div className="h-[2px] bg-gray-400 w-8 rounded"></div>
            </div>

            <div className="mt-4 space-y-2 font-serif text-center">
              <div className="h-[50px]">
                <TypeAnimation
                  sequence={[1000, "Chinmaya Kumar"]}
                  wrapper="span"
                  speed={5}
                  className="text-3xl font-extrabold font-playfair"
                  repeat={1}
                  cursor={false}
                />
              </div>
              <h5 className="text-xl font-bold text-gray-500">
                Full Stack Developer
              </h5>
            </div>

            <div className="flex justify-center mt-10">
              <ContactButton className={"px-7 py-3"} />
            </div>
          </div>
        </div>

        <div className="flex justify-center z-0 mt-5 lg:mt-0">
          <div className="block h-[300px] md:h-[500px] w-[300px] md:w-[500px] overflow-hidden">
            <img
              // src="https://websitedemos.net/portfolio-02/wp-content/uploads/sites/864/2021/05/about-01-free-img.jpg"
              src="https://10web-site.ai/17/wp-content/uploads/sites/19/2024/02/MAIN_NiOAKptj.webp"
              alt="profile_image"
              className="object-cover object-center h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile
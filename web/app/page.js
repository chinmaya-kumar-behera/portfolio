"use client";
import { PageContainer } from "@/components/shared/page";
import { THEME_COLOR } from "@/constant/color.constant";
import { CiMail, CiPhone } from "react-icons/ci";
import { TypeAnimation } from "react-type-animation";
import Navbar from "@/views/header";
import AboutMe from "@/views/aboutme/AboutMe";
import Skills from "@/views/skill";
import Experience from "@/views/experience";
import Image from "next/image";

export default function Home() {

  return (
    <main className="mx-auto">
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute -right-[50%] -top-[30%] h-[1400px] w-[1400px] rounded-full bg-gradient-to-r from-blue-100 via-blue-50 to-white"></div>
        <section className="relative mx-auto">
          <PageContainer>
            <Navbar />
            <section className="flex justify-between mt-10 pl-5 mb-10">
              <div className="w-1/2 flex flex-col justify-center gap-8 -translate-y-20">
                <div className="space-y-4 text-lg text-gray-500">
                  <TypeAnimation
                    sequence={["HELLO, MY NAME IS"]}
                    wrapper="span"
                    speed={50}
                    repeat={1}
                    cursor={true}
                  />
                  <div className="h-[2px] bg-gray-400 w-8 rounded"></div>
                </div>{" "}
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
                <div className="space-y-2 font-barlow-semi-condensed">
                  <div className="flex items-center gap-2">
                    <span
                      className="p-1 rounded-md"
                      style={{ backgroundColor: THEME_COLOR }}
                    >
                      <CiMail className="text-xl text-white" />
                    </span>
                    <span className="font-semibold text-gray-700 tracking-wider">
                      chinmayakumarbehera.official@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="p-1 rounded-md"
                      style={{ backgroundColor: THEME_COLOR }}
                    >
                      <CiPhone className="text-xl text-white" />
                    </span>
                    <span className="font-semibold text-gray-700 tracking-widest">
                      7008962911
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-[630px] w-[630px] overflow-hidden relative">
                <img
                  src="https://websitedemos.net/portfolio-02/wp-content/uploads/sites/864/2021/05/about-01-free-img.jpg"
                  alt="profile_image"
                  className="object-cover object-center rounded-full"
                />
                {/* <Image src={'https://websitedemos.net/portfolio-02/wp-content/uploads/sites/864/2021/05/about-01-free-img.jpg'} width={100} height={100}/> */}
              </div>
            </section>

            <div className="py-20">
              <AboutMe />
            </div>

            <div className="flex gap-10 py-20">
              <Skills />
            </div>
            <Experience />
          </PageContainer>
        </section>
      </div>
    </main>
  );
}






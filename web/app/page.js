"use client";
import { PageContainer } from "@/components/shared";
import Navbar from "@/views/header";
import AboutMe from "@/views/aboutme/AboutMe";
import Skills from "@/views/skill";
import Experience from "@/views/experience";
import SocialLinks from "@/views/social";
import Project from "@/views/project";
import Profile from "@/views/profile";
import Contact from "@/views/contact";
import ScrollIndicator from "@/components/ScrollIndicator";
import { SCROLL_INDICATOR_INDEX, SOCIAL_LINK_INDEX } from "@/constant/zIndex.constant";

export default function Home() {
  return (
    <main className="">
      {/* scroll indicator */}
      <div
        className="absolute top-0 w-full"
        style={{ zIndex: SCROLL_INDICATOR_INDEX }}
      >
        <ScrollIndicator />
      </div>

      <section className="relative mx-auto">
        {/* Social Links */}
        <div
          className="fixed right-2 bottom-6"
          style={{ zIndex: SOCIAL_LINK_INDEX }}
        >
          <SocialLinks />
        </div>

        <div className="h-auto lg:h-screen bg-gradient-radial from-indigo-400 via-indigo-300 to-white">
          <PageContainer className="px-2 lg:px-0 h-full flex flex-col justify-between">
            <Navbar />
            <Profile />
          </PageContainer>
        </div>

        <div className="bg-black py-10">
          <PageContainer>
            <div className="flex gap-5 lg:gap-10 px-2 lg:px-0">
              <div className="">
                <img
                  src={`${"https://10web-site.ai/17/wp-content/uploads/sites/19/2024/02/logoipsum-327_NiOAKptj.webp"}`}
                  className="h-[100px] w-[100px]"
                />
              </div>
              <div className="text-white  bg-gray-600 p-3 rounded-xl bg-opacity-30 space-y-2">
                <h2 className="font-bold text-xl lg:text-2xl">
                  YCY CLASS EDUTECH PVT LTD
                </h2>
                <p>1 Years Experience</p>
              </div>
            </div>
          </PageContainer>
        </div>

        <PageContainer className="px-2 lg:px-0">
          <div className="py-20 mt-28 lg:mt-0">
            <AboutMe />
          </div>

          <div className="py-20">
            <Skills />
          </div>

          <div className="py-5 lg:py-10">
            <Experience />
          </div>

          <div className="py-10">
            <Project />
          </div>
        </PageContainer>
      </section>

      <section className="bg-gray-200">
        <PageContainer>
          <div className="py-20">
            <Contact />
          </div>
        </PageContainer>
      </section>

      <footer className="text-center text-sm py-2">@copyright</footer>
    </main>
  );
}

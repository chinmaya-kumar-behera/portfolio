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
    <main className="mx-auto">
      <div
        className="absolute top-0 w-full"
        style={{ zIndex: SCROLL_INDICATOR_INDEX }}
      >
        <ScrollIndicator />
      </div>
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute -right-[65%] -top-[25%] h-[1700px] w-[1700px] rounded-full bg-gradient-to-br from-blue-100 via-blue-50 to-white" />
        <div
          className="fixed right-2 bottom-6"
          style={{ zIndex: SOCIAL_LINK_INDEX }}
        >
          <SocialLinks />
        </div>

        <section className="relative mx-auto">
          <PageContainer className='px-2 lg:px-0'>
            <Navbar />

            <Profile />

            <div className="py-20 mt-28 lg:mt-0">
              <AboutMe />
            </div>

            <div className="py-20">
              <Skills />
            </div>

            <div className="py-10">
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
      </div>
    </main>
  );
}






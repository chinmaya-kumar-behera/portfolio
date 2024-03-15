"use client";
import { ContactButton, Heading, PageContainer } from "@/components/shared";
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
    <main className="relative">
      {/* scroll indicator */}
      <div
        className="absolute top-0 w-full"
        style={{ zIndex: SCROLL_INDICATOR_INDEX }}
      >
        <ScrollIndicator />
      </div>

      <section className="relative mx-auto">
        <div
          className="fixed right-2 bottom-6"
          style={{ zIndex: SOCIAL_LINK_INDEX }}
        >
          <SocialLinks />
        </div>

        <div className="h-auto lg:h-screen bg-gradient-radial from-indigo-500 via-indigo-300 to-indigo-200">
          <PageContainer className="px-2 lg:px-0 h-full flex flex-col justify-between">
            <Navbar />
            <Profile />
          </PageContainer>
        </div>

        {/* work experience */}
        <div className="bg-black py-10">
          <PageContainer>
            <div className="flex justify-center lg:justify-start gap-2 md:gap-5 lg:gap-10 px-2 lg:px-0">
              <div className="text-gray-100">
                <Experience />
              </div>
            </div>
          </PageContainer>
        </div>

        {/* about me */}
        <AboutMe />

        {/* skills */}
        <Skills />
      </section>

      {/* projects */}
      <div className="bg-black py-10">
        <PageContainer>
          <div className="text-gray-100">
            <Project />
          </div>
        </PageContainer>
      </div>

      <section className="relative mx-auto">
        <PageContainer>
          <div className="space-y-5 py-10 lg:py-20 text-center">
            <Heading>
              <h1 className="">
                Lets Collaborate to Create Your Dream Website
              </h1>
            </Heading>
            <div className="text-center">
              <ContactButton className={"px-7 py-3"} />
            </div>
          </div>
        </PageContainer>
      </section>

      {/* contact */}
      <div className="bg-black py-10">
        <PageContainer>
          <div className="text-gray-100">
            <Contact />
          </div>
        </PageContainer>
      </div>
    </main>
  );
}

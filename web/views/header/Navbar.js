'use client';
import React, { useState } from 'react'
import logo from '../../_asssets/logo/ck-logo.png'
import Image from 'next/image';
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { HUMBURGER_INDEX } from '@/constant/zIndex.constant';
import { RxCross2 } from 'react-icons/rx';
import { THEME_COLOR } from '@/constant/color.constant';
import ThemeSwitch from './components/ThemeSwitch';

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    if (router.asPath?.includes("#")) {
      const targetSection = router.asPath.split("#")[1];
      console.log(targetSection);
      scrollToSection(targetSection);
    }
  }, [router.asPath]);

  const onLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="flex justify-between items-center z-10 relative">
      <div className="w-fit flex items-center gap-3 py-2 px-3">
        <div className="relative h-[50px] sm:h-[50px] md:h-[60px] lg:h-[70px] w-[50px] sm:w-[50px] md:w-[60px] lg:w-[70px]">
          <Image
            src={logo}
            fill={true}
            className="absolute h-full w-full object-cover object-center"
          />
        </div>
        <span className="text-xl md:text-2xl lg:text-3xl font-barlow-semi-condensed font-bold tracking-wider text-gray-600">
          CHINMAYA KUMAR
        </span>
      </div>

      {/* large screen */}
      <div className="py-5 hidden lg:flex items-center gap-10 text-gray-700 cursor-pointer font-barlow-semi-condensed">
        <Link href={"#about"} className="hover:text-blue-500 transition-all">
          ABOUT
        </Link>
        <Link href={"#skills"} className="hover:text-blue-500 transition-all">
          SKILLS
        </Link>
        <Link
          href={"#experience"}
          className="hover:text-blue-500 transition-all"
        >
          EXPERIENCE
        </Link>
        <Link href={"#projects"} className="hover:text-blue-500 transition-all">
          PROJECTS
        </Link>
        <Link href={"#contact"} className="hover:text-blue-500 transition-all">
          CONTACT
        </Link>
        {/* <ThemeSwitch /> */}
      </div>

      <div className="mr-4 lg:hidden">
        <button
          onClick={handleMenuToggle}
          className="focus:outline-none"
          style={{ color: THEME_COLOR }}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <div className="w-0" style={{ zIndex: HUMBURGER_INDEX }}>
          <div
            className={`${
              isMenuOpen ? "fixed" : "hidden"
            } top-0 left-0 w-full h-full bg-slate-600 opacity-50 filter blur-sm transition-opacity duration-300`}
          />
          <aside
            className={`fixed top-0 right-0 transition-all duration-300 ${
              isMenuOpen ? "w-[250px] md:w-[400px]" : "w-0"
            } h-screen bg-white overflow-y-auto`}
            style={{ zIndex: 100 }}
          >
            <div className="text-blue-500">
              <div className="">
                <button
                  className="p-2"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  style={{ color: THEME_COLOR }}
                >
                  <RxCross2 className="text-2xl" />
                </button>
              </div>

              <div className="flex flex-col gap-5 p-5 text-sm">
                <Link
                  href={"#about"}
                  className="hover:text-blue-500 transition-all"
                  onClick={onLinkClick}
                >
                  ABOUT
                </Link>
                <Link
                  href={"#skills"}
                  className="hover:text-blue-500 transition-all"
                  onClick={onLinkClick}
                >
                  SKILLS
                </Link>
                <Link
                  href={"#experience"}
                  className="hover:text-blue-500 transition-all"
                  onClick={onLinkClick}
                >
                  EXPERIENCE
                </Link>
                <Link
                  href={"#projects"}
                  className="hover:text-blue-500 transition-all"
                  onClick={onLinkClick}
                >
                  PROJECTS
                </Link>
                <Link
                  href={"#contact"}
                  className="hover:text-blue-500 transition-all"
                  onClick={onLinkClick}
                >
                  CONTACT
                </Link>

                {/* <ThemeSwitch /> */}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Navbar
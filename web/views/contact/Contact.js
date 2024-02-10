import { THEME_COLOR } from "@/constant/color.constant";
import { CiMail, CiPhone } from "react-icons/ci";
import React from "react";
import Image from "next/image";
import logo from "../../_asssets/logo/ck-logo.png"
import { 
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import NavigationHandler from "@/handler/NavigationHandler";
import Link from "next/link";

const Contact = () => {
    const {
      navigateToLinkedin,
      navigateToInstagram,
      navigateToGithub,
      navigateToFacebook,
      navigateToTwitter,
    } = NavigationHandler();
    
  const iconStyle = `p-3 bg-blue-500 text-white rounded-full shadow-blue-300 cursor-pointer hover:bg-blue-50 hover:text-blue-500 transition-all duration-500 `;

  return (
    <section id="contact" className="space-y-10 px-2 lg:px-0">
      <div className="space-y-5">
        <div className="space-y-5">
          <div className="text-center">
            <h1 className="text-3xl lg:text-6xl font-bold font-playfair">Contact Me</h1>
          </div>
          <div className="">
            <div className="flex items-center gap-3 py-2">
              <div className="relative h-[70px] w-[70px]">
                <Link
                  href={"#profile"}
                  className="hover:text-blue-500 transition-all"
                >
                  <Image
                    src={logo}
                    fill={true}
                    className="absolute h-full w-full object-cover object-center"
                  />
                </Link>
              </div>
              <span className="text-3xl font-barlow-semi-condensed font-bold tracking-wider text-gray-600">
                CHINMAYA KUMAR
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-2 font-barlow-semi-condensed">
          <div className="flex items-center gap-2">
            <span
              className="p-1.5 rounded-full"
              style={{ backgroundColor: THEME_COLOR }}
            >
              <CiMail className="text-lg text-white" />
            </span>
            <span className="font-semibold text-gray-700 tracking-wider">
              chinmayakumarbehera.official@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="p-1.5 rounded-full"
              style={{ backgroundColor: THEME_COLOR }}
            >
              <CiPhone className="text-lg text-white" />
            </span>
            <span className="font-semibold text-gray-700 tracking-widest">
              7008962911
            </span>
          </div>
        </div>
      </div>

      {/* social links */}

      <div className="flex gap-2 items-center">
        <button className={iconStyle} onClick={navigateToLinkedin}>
          <FaLinkedinIn />
        </button>
        <button className={iconStyle} onClick={navigateToGithub}>
          <FaGithub />
        </button>
        <button className={iconStyle} onClick={navigateToInstagram}>
          <FaInstagram />
        </button>
        <button className={iconStyle} onClick={navigateToFacebook}>
          <FaFacebookF />
        </button>
        <button className={iconStyle} onClick={navigateToTwitter}>
          <FaTwitter />
        </button>
      </div>
    </section>
  );
};

export default Contact;

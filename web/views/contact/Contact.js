import { THEME_COLOR } from "@/constant/color.constant";
import { CiMail, CiPhone } from "react-icons/ci";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../_asssets/logo/ck-logo.png"
import Link from "next/link";
import CopyButton from "./CopyButton";
import SocialIcons from "./SocialIcons";
import { MdCheck } from "react-icons/md";

const Contact = () => {
  const [mailText, setMailText] = useState('copy to clipboard');
  const [phoneText, setPhoneText] = useState("copy to clipboard");

  const [text, setText] = useState("Copy to clipboard");

  const phoneNumber = 7008962911
  const mail = 'chinmayakumarbehera.official@gmail.com'

  const checkedText = (
    <span className="flex items-center gap-1">
      <MdCheck className="text-md" /> Copied
    </span>
  );

  const setToClipBoard = (value) => {
    return navigator.clipboard.writeText(value);
  }

  const onMailButtonClick = () => {
    setToClipBoard(mail).then((res) => {
      setText(checkedText);
      setTimeout(() => setText("Copy to clipboard"), 1000);
    });

  }

  const onPhoneButtonClick = () => {
     setToClipBoard(phoneNumber).then((res) => {
       setText(checkedText);
       setTimeout(() => setText("Copy to clipboard"), 1000);
     });
  };
  
  return (
    <section id="contact" className="space-y-10 px-2 lg:px-0">
      <div className="space-y-5">
        <div className="space-y-5">
          <div className="text-center">
            {/* <h1 className="text-3xl lg:text-6xl font-bold font-playfair">
              Contact Me
            </h1> */}
          </div>
          <div className="">
            <div className="flex items-center gap-3 py-2">
              <div className="relative h-[50px] lg:h-[70px] w-[50px] lg:w-[70px]">
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
              <span className="text-xl sm:text-2xl lg:text-3xl font-barlow-semi-condensed font-bold tracking-wider text-gray-600">
                CHINMAYA KUMAR
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-2 font-barlow-semi-condensed text-sm lg:text-lg ">
          <div className="flex items-center gap-2 relative w-fit group cursor-pointer">
            <span
              className="p-1.5 rounded-full"
              style={{ backgroundColor: THEME_COLOR }}
            >
              <CiMail className="text-lg text-white" />
            </span>
            <span className="font-semibold text-gray-700 sm:tracking-wider">
              {mail}
            </span>
            <CopyButton onClick={onMailButtonClick} text={text} />
          </div>
          <div className="flex items-center gap-2 relative w-fit group">
            <span
              className="p-1.5 rounded-full"
              style={{ backgroundColor: THEME_COLOR }}
            >
              <CiPhone className="text-lg text-white" />
            </span>
            <span className="font-semibold text-gray-700 sm:tracking-widest cursor-pointer">
              {phoneNumber}
            </span>
            <CopyButton onClick={onPhoneButtonClick} text={text} />
          </div>
        </div>
      </div>

      <SocialIcons />
    </section>
  );
};

export default Contact;

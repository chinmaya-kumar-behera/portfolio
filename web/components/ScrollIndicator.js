import { THEME_COLOR } from "@/constant/color.constant";
import React, { useEffect } from "react";

const ScrollIndicator = () => {
  const handleScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div
        id="myBar"
        className="transition-all"
        style={{ width: "0%", height: "5px", background: THEME_COLOR, position: "fixed", top: "0", left: "0",zIndex:'30',borderRadius:'5px', }}/>
    </div>
  );
};

export default ScrollIndicator;

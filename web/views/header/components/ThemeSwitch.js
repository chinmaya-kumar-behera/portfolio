import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`container ${
        isOn
          ? "bg-gradient-to-br from-purple-800 to-pink-600"
          : "bg-gradient-to-br from-yellow-400 to-red-500"
      }`}
      data-darkmode={isOn}
      onClick={() => setIsOn(!isOn)}
      style={{
        height: "40px",
        width: "100px",
        borderRadius: "25px",
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        padding: "0 5px",
        cursor: "pointer",
        transition: "all .3s",
      }}
    >
      <motion.div layout className="handle">
        <AnimatePresence initial={false}>
          {isOn ? (
            <FaMoon className="icon text-yellow-400" />
          ) : (
            <FaSun className="icon text-red-500" />
                  )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ThemeSwitch;

import { THEME_COLOR } from "@/constant/color.constant";

const CopyButton = ({ onClick, text }) => {
  return (
    <button
      className="px-4 py-1.5 rounded-md text-white opacity-0 group-hover:opacity-100 text-sm transition-all duration-500 shadow-sm shadow-black"
      style={{ background: THEME_COLOR }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CopyButton;
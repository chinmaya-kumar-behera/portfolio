import { THEME_COLOR } from "@/constant/color.constant";

const CopyButton = ({ onClick, text }) => {
  return (
    <button
      className="absolute -right-2 top-0 px-2 py-1 translate-x-full rounded-md text-white opacity-0 group-hover:opacity-100 text-sm transition-all duration-500 shadow-sm shadow-black"
      style={{ background: THEME_COLOR }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CopyButton;
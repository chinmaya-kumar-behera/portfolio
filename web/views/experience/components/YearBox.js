import { THEME_COLOR } from '@/constant/color.constant';
import React from 'react'

const YearBox = () => {
  return (
    <div className="relative h-9 bg-gray-200 flex justify-center items-center">
      <span className="relative w-[120px] text-sm z-10 px-5" style={{ color: THEME_COLOR }}>
        2022-2023
      </span>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 h-[27px] w-[27px] rotate-45 bg-gray-200 z-0"></div>
    </div>
  );
}

export default YearBox
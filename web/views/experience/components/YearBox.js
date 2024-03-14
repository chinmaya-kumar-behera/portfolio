import Button from '@/components/UI/Button';
import { THEME_COLOR } from '@/constant/color.constant';
import React from 'react'

const YearBox = () => {
  return (
    // <div className="max-w-[120px] relative h-9 bg-gradient-to-r from-blue-500 to-blue-200 flex justify-center items-center">
    //   <span
    //     className="relative w-[120px] text-sm z-10 flex justify-center"
    //     style={{ color: THEME_COLOR }}
    //   >
    //     2022-2023
    //   </span>
    //   <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 h-[27px] w-[27px] rotate-45 bg-gray-200 z-0"></div>
    // </div>

    <div className="">
      <Button className={'min-w-[130px]'}>2022-2023</Button>
    </div>
  );
}

export default YearBox
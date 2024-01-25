import { THEME_COLOR } from '@/constant/color.constant';
import React from 'react'

const GlowDot = () => {
  return (
    <div
      className="min-w-5 min-h-5 rounded-full "
      style={{
        backgroundColor: THEME_COLOR,
        boxShadow: `0 0 20px 3px ${THEME_COLOR}`,
      }}
    />
  );
}

export default GlowDot
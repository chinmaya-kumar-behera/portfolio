import { BUTTON } from '@/constant/button.constant';
import React from 'react'

const Button = ({ className, children }) => {
    console.log(BUTTON)
  const style = "bg-gradient-to-r from-blue-400 to-blue-600 text-white " + className;

  return <button className={style}>children</button>;
};

export default Button
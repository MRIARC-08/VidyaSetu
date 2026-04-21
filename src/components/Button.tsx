'use client';
import React from 'react';

function Button({
  text,
  action = '',
  color = '',
  textCol = '',
  additional = '',
  hover = '',
}: {
  text: string;
  action: any;
  color: string;
  textCol: string;
  additional: string;
  hover: string;
}) {
  return (
    <button
      className={` ${color ? color : 'bg-primary'} ${textCol ? textCol : ' text-white'} ${additional ? additional : ''} ${hover ? hover : 'hover:bg-primary/60'} uppercase   p-4 pl-8 pr-8   font-bold  transition-all duration-300 cursor-pointer text-[14px]`}
      onClick={action}
    >
      {text}
    </button>
  );
}

export default Button;

"use client";

import { ReactNode, forwardRef } from "react";

interface ButtonProps {
  children: ReactNode,
  className?:string,
  onclick: (e:any) => void
}

export const Button = forwardRef(({ children,className, onclick }: ButtonProps) => {
  return (
    <button className={`${className} shadow text-white bg-slate-800 px-2 py-1 rounded`} onClick={onclick}>
      {children}
    </button>
  )
}
);

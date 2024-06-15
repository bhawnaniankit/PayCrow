"use client";

import { ReactNode, forwardRef } from "react";

interface ButtonProps {
  children: ReactNode,
  onclick: (e:any) => void
}

export const Button = forwardRef(({ children, onclick }: ButtonProps) => {
  return (
    <button className=" text-white bg-slate-800 px-2 py-1 rounded" onClick={onclick}>
      {children}
    </button>
  )
}
);

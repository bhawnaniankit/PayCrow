"use client";

import { ReactNode, forwardRef } from "react";

interface ButtonProps {
  children: ReactNode,
  onclick: () => void
}

export const Button = forwardRef(({ children, onclick }: ButtonProps) => {
  return (
    <button className=" bg-slate-800, p-2 rounded" onClick={onclick}>
      {children}
    </button>
  )
}
);

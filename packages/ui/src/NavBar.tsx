"use client"
import { Button } from "./button";
import { Inter } from 'next/font/google';
import { GiEagleHead } from "react-icons/gi";
import { signIn,signOut } from 'next-auth/react';
import { useSession } from "next-auth/react"

const inter = Inter({weight:'400', subsets: ['latin'] })

export const NavBar = () => {
  const session= useSession();
    return <div className={`${inter.className} bg-black shadow-md shadow-white flex justify-between py-2 items-center border-b px-6`}>
        <div className=" md:text-2xl text-xl text-white flex flex-col justify-center">
            <GiEagleHead /> PayCrow
        </div>
        <div className="flex text-white flex-col items-center justify-center">
            <Button className=" hidden md:block text-sm md:text-md bg-gray-700 shadow" onclick={session?.data?.user ?()=>{signOut()}  : ()=>{signIn()}}>{session?.data?.user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}
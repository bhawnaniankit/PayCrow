"use client";
import {Appbar} from "@repo/ui/AppBar"
import { useSession } from "next-auth/react"
import { signIn,signOut } from "next-auth/react";

import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "../components/google-gemini-effect";

export default function() {
  const session= useSession();

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  if(session.data?.user){
       return <div>
        {JSON.stringify(session)}
        <Appbar user={session.data?.user} onSignin={signIn} onSignout={signOut}></Appbar>
        </div>
       }

  return (<>
    <Appbar className=" bg-black border-none" user={session.data?.user} onSignin={signIn} onSignout={signOut}></Appbar>
    <div
      className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        title="Paytm karo"
        description="Paytm is your one-stop solution for all your daily payment needs"
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />

    </div>
    <div className=" h-screen">Hellloo</div>
      </>
  );
}

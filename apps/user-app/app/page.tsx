"use client"
import {Appbar} from "@repo/ui/AppBar"
import { useSession } from "next-auth/react"
import { signIn,signOut } from "next-auth/react";

export default function() {
  const session= useSession();

  return <div>
    {JSON.stringify(session)}
    <Appbar user={session.data?.user} onSignin={signIn} onSignout={signOut}></Appbar>
  </div>
}
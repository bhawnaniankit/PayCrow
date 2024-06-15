import { Appbar } from "@repo/ui/AppBar";
import { signIn,signOut } from "next-auth/react";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <>
    {/* <Appbar user={undefined} onSignin={signIn} onSignout={signOut}/> */}
    {children}
    </>
  );
}

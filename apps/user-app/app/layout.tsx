import "./globals.css";
import { Providers } from "../providers";
import { Toaster } from "sonner";
import {AppBar} from "@repo/ui/AppBar"
import { NavBar } from "@repo/ui/NavBar";
import { authOptions } from "../lib/auth";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const listOfOptions=[{
    title:"Home",
    icon:"/home.svg",
    href:"/",
    alt:"home"
  },
  {
    title:"Transfer",
    icon:"/transfer.svg",
    href:"/transfer",
    alt:"transfer"
  },
  {
    title:"Transactions",
    icon:"/transactions.svg",
    href:"/transactions",
    alt:"clock"
  }
]
  return (
    <html lang="en">
      <Providers>
        <body className=" h-screen">
        <NavBar></NavBar>
          <div className=" flex h-full w-full">
            <AppBar listOfOptions={listOfOptions} authOptions={authOptions} />
            <div className=" w-full">
              {children}
            </div>
          </div>
          <Toaster richColors />
        </body>
      </Providers>
    </html>
  );
}

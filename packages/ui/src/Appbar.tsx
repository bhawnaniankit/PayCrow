import { Button } from "./button";
import { Inter } from 'next/font/google'
 
const inter = Inter({weight:'400', subsets: ['latin'] })

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    // TODO: can u figure out what the type should be here?
    onSignin: any,
    onSignout: any,
    className?:string
}

export const Appbar = ({
    user,
    onSignin,
    onSignout,
    className
}: AppbarProps) => {
    return <div className={`${className} ${inter.className} shadow flex justify-between py-2 items-center border-b px-6`}>
        <div className="text-2xl text-white flex flex-col justify-center">
            PayTM
        </div>
        <div className="flex text-white flex-col items-center justify-center">
            <Button className=" bg-paytmBlue shadow text-black" onclick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}
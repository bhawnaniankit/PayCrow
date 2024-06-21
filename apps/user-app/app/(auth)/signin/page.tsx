import { getServerSession } from "next-auth"
import { authOptions } from "../../../lib/auth"
import { redirect } from "next/navigation"
import Signin from "@repo/ui/Signin"
import { SqBackground } from "@repo/ui/sqBackground"

const page = async() => {
    const session= await getServerSession(authOptions);
    if(session?.user)
        redirect("/");
    return (
        <>
            <SqBackground>
                <Signin />
            </SqBackground>
        </>
  )
}

export default page
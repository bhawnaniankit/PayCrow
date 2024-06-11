
import SignUp from "@repo/ui/SignUp"
import db from "@repo/db/client"


export default function (){
    // const data=await db.user.findMany({})
    return <div>
        {/* {JSON.stringify(data)} */}
        <SignUp></SignUp>
    </div>
}
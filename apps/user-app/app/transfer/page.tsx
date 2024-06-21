import React from 'react'
import { NavBar } from '@repo/ui/NavBar'
import { signIn,signOut } from 'next-auth/react';
import { authOptions } from '../../lib/auth';
import { getServerSession } from 'next-auth';

const page = async() => {
    const session=await getServerSession(authOptions);
    console.log("Transfer Component");
    
//   const session= useSession();
  return (
    <>
        {/* {JSON.stringify(session)} */}
    </>
  )
}

export default page
"use server"
import db from "../db/index";
import { signUpSchema, signUpType } from "../common/schema";
import bcrypt from "bcrypt";


export const signUpUser = async (userData:signUpType)=>{
    const parsedData = await signUpSchema.safeParse(userData) ;
    if(!parsedData.success){
        return {error:true,msg:parsedData}
    }

    const hashedPassword=await bcrypt.hash(userData.password,10);

    try{
        const user=await db.user.create({
            data:{
                name:userData.name,
                email:userData.email,
                number:userData.number,
                password:hashedPassword   
            }
        })

        console.log(user);
        
        return {
            error:false,
            msg:"User Created"
        }
    }
    catch(e){
        return {
            error:true,
            msg:"Internal Sever Error"
        }
    }
    
}
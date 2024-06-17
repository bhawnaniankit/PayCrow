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

        return {
            error:false,
            msg:"User Created"
        }
    }
    catch(e:any){

        if(e.code=="P1001"){
            return {
                error:true,
                msg:"Datebase Down"
            }
        }
                    
        if(e.code=="P2002"){
            return {
                error:true,
                msg:`${e.meta.target[0]} already exists`
            }
        }

        return {
            error:true, 
            msg:"Internal Sever Error"
        }
    }
    
}
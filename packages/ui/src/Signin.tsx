"use client"
import {Input} from "./Input"
import { FaEyeSlash } from "react-icons/fa"
import { FaEye } from "react-icons/fa"
import { Card } from "./Card"
import { Button } from "./button"
import {  useRef, useState } from "react"
import { Label } from "./Label"
import { signIn } from 'next-auth/react';
import { toast } from "sonner"
import {useRouter} from "next/navigation";
import { siginSchema, siginType} from "@repo/common/schema"

const Signin = ():JSX.Element => {
  const [passwordVisible,setPasswordVisible]=useState<boolean>(false);
  const [isRequiredError,setRequiredError]=useState({
    phoneReq:false,
    passwordReq:false
  })
  const router=useRouter()
  const phone=useRef("");
  const password=useRef("");

  async function handleSubmit(e: React.FormEvent){
    if(e){
      e.preventDefault();
    }

    if(!phone.current || !password.current){
      setRequiredError({
        phoneReq:phone.current ? false : true,
        passwordReq:password.current ? false : true
      })
      return;
    }
    
    const toastMsg=toast.loading("Signning in...",{
      duration:5000
    });

    const data:siginType={
      phone:phone.current,
      password:password.current
    }

    const parsedData=await siginSchema.safeParse(data);

    if(!parsedData.success){
      return toast.error(parsedData.error.errors[0]?.message,{
        id:toastMsg
      })
    }
    
    const res=await signIn('credentials',{
      phone:phone.current,
      password:password.current,
      redirect:false
    })
    
    if(res?.error){      
      return toast.error("Some error occcured!");
    }

    toast.success("Logged In");
    router.push("/")
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className=" md:min-w-[27%] p-16">
        <div className=" text-3xl text-indigo-950 text-center font font-bold">PayTm</div>
        <div className=" text-xl  text-center my-4">Log In</div>
        <form className=" flex flex-col">
          <Label 
            lable="Contact" 
            className=" mb-1"
          />
          <Input 
            className=" border px-2 py-1 rounded-md" 
            placeholder="Enter Contact Number" 
            type="tel"
            onchange={(e)=>{
              setRequiredError((p)=>({
                ...p,
                phoneReq:false
              }))
              phone.current=e.target.value
            }}
          />
          {
            isRequiredError.phoneReq && <span className=" text-red-400">Contact Number is Required</span>
          }
          <Label lable="Password" className="mt-2 mb-1"/>
          <div className=" shadow bg-white flex border justify-between px-2 py-1 rounded-md items-center">
            <Input
              className=" shadow-none"
              placeholder="••••••••" 
              type={ passwordVisible?"text":"password"}
              onchange={(e)=>{
                password.current=e.target.value
              }}
            />
            <button 
              onClick={(e)=>{
                e.preventDefault()
                setPasswordVisible(!passwordVisible)
              }}>{passwordVisible?<FaEye/>:<FaEyeSlash/>}
            </button>
          </div>
          {
            isRequiredError.passwordReq && <span className=" text-red-400">Password is required</span>
          }
          <Button className="mt-6" onclick={handleSubmit}>Sign In</Button>
        </form>
      </Card>
    </div>
  )
}

export default Signin
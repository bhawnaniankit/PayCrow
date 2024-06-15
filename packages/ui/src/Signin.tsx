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

const Signin = ():JSX.Element => {
  const [passwordVisible,setPasswordVisible]=useState<boolean>(false);
  const router=useRouter()
  const [isRequiredError,setRequiredError]=useState({
    phoneReq:false,
    passwordReq:false
  })
  const phone=useRef("");
  const password=useRef("");

  async function handleSubmit(e: React.FormEvent){
    if(e){
      e.preventDefault();
    }

    if(!phone.current || !password.current){
      setRequiredError({
        phoneReq:phone.current ? true : false,
        passwordReq:password.current ? true : false
      })
      return;
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
      <Card className=" w-[27%] p-16">
        <div className=" text-3xl text-indigo-950 text-center font font-bold">PayTm</div>
        <div className=" text-xl  text-center my-4">Log In</div>
        <form className="flex flex-col">
          <Label 
            lable="Contact" 
            className=" mb-1"
          />
          <Input 
            className=" border px-2 py-1 rounded-md" 
            label="Contact Number" 
            placeholder="Enter Contact Number" 
            type="tel"
            onchange={(e)=>{
              phone.current=e.target.value
            }}
          />
          <Label lable="Password" className="mt-2 mb-1"/>
          <div className="flex border px-2 py-1 mb-6 rounded-md items-center">
            <Input
              label="Password" 
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
              }}>{passwordVisible?<FaEyeSlash/>:<FaEye/>}
            </button>
          </div>
          <Button onclick={handleSubmit}>Sign In</Button>
        </form>
      </Card>
    </div>
  )
}

export default Signin
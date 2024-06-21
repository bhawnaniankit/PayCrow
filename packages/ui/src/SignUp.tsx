"use client"
import {Input} from "./Input"
import { FaEyeSlash } from "react-icons/fa"
import { FaEye } from "react-icons/fa"
import { Card } from "./Card"
import { Button } from "./button"
import {  useRef, useState } from "react"
import { Label } from "./Label"
import { toast } from "sonner"
import {signUpUser} from "@repo/actions/signUp"
import { Roboto } from 'next/font/google'
import { useRouter } from "next/navigation"
import { signUpSchema } from "@repo/common/schema"
import { GiEagleHead } from "react-icons/gi"
import Link from "next/link"

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

//todo - set a return type
const SignUp = ():JSX.Element => {
  const [passwordVisible,setPasswordVisible]=useState<boolean>(false);
  const [isRequiredError,setRequiredError]=useState({
    nameReq:false,
    phoneReq:false,
    emailReq:false,
    passwordReq:false
  })

  const router=useRouter();

  const name=useRef("");
  const email=useRef("");
  const phone=useRef("");
  const password=useRef("");

  async function handleSubmit(e: React.FormEvent){
    if(e){
      e.preventDefault();
    }

    setPasswordVisible((p)=> false)

    if(!phone.current || !password.current || !name.current || !email.current){
      setRequiredError({
        nameReq:name.current ? false : true,
        phoneReq:phone.current ? false : true,
        emailReq:email.current ? false : true,
        passwordReq:password.current ? false : true
      })
      return;
    }

    const toastMsg=toast.loading("Signing Up...");
    const data={name:name.current,email:email.current,number:phone.current,password:password.current};

    const parsedData = await signUpSchema.safeParse(data);
    if(!parsedData.success){
      toast.error(`${parsedData.error.errors[0]?.message}`,{
        id:toastMsg
      })
    }
    const res = await signUpUser(data);
    if(res.error){
      return toast.error(`${res.msg}`,{
        id:toastMsg
      });
    }

    toast.success(`${res.msg}`,{
      id:toastMsg
    }); 

    router.push("/");
  }

  return (
    <div className={` ${roboto.className} text-black font-bold bg-opacity-90 h-screen flex justify-center items-center`}>
      <Card className=" text-sm md:min-w-[80%] p-12 md:p-16 lg:m-20">
        <div className=" text-4xl text-black text-center flex justify-center font font-bold"> <GiEagleHead />ayCrow</div>
        <div className=" text-xl font-semibold text-center my-4">Sign Up</div>
        <form className="flex flex-col">
          <Label 
            lable="Name" 
            className=" mb-1"
          />
          <Input 
            className=" border px-2 py-1 rounded-md" 
            placeholder="Full Name" 
            type="text"
            onchange={(e)=>{
              setRequiredError((pervState)=>({
                ...pervState,
                nameReq:false
              }))
              name.current=e.target.value
            }}
          />
          {
            isRequiredError.nameReq && <span className=" text-red-400">Name is Required</span>
          }
          <Label 
            lable="Email" 
            className=" mb-1 mt-2"
          />
          <Input 
            className=" border px-2 py-1 rounded-md" 
            placeholder="Email" 
            type="tel"
            onchange={(e)=>{
              setRequiredError((pervState)=>({
                ...pervState,
                emailReq:false
              }))
              email.current=e.target.value
            }}
          />
          {
            isRequiredError.emailReq && <span className=" text-red-400">Email is Required</span>
          }
          <Label 
            lable="Contact" 
            className=" mb-1 mt-2"
          />
          <Input 
            className=" border px-2 py-1 rounded-md" 
            placeholder="Contact Number" 
            type="tel"
            onchange={(e)=>{
              setRequiredError((pervState)=>({
                ...pervState,
                phoneReq:false
              }))
              phone.current=e.target.value
            }}
          />{
            isRequiredError.phoneReq && <span className=" text-red-400">Contact is Required</span>
          }

          <Label lable="Password" className="mt-2 mb-1"/>
          <div className="flex border bg-white px-2 py-1 justify-between shadow rounded-md items-center">
            <Input
              className="shadow-none"
              placeholder="••••••••" 
              type={ passwordVisible?"text":"password"}
              onchange={(e)=>{
                setRequiredError((pervState)=>({
                  ...pervState,
                  passwordReq:false
                }))
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
              isRequiredError.passwordReq && <span className=" text-red-400">Password is Required</span>
            }
            <Link href={"/signin"} className="mt-1">Already have an account?</Link>
          <Button className=" mt-4" onclick={handleSubmit}>Sign Up</Button>
        </form>
      </Card>
    </div>
  )
}

export default SignUp
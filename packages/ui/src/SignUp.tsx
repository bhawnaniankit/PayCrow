"use client"

import { useState } from "react"
import { Button } from "@repo/ui/button"

interface user{
  name:string,
  email:string,
  phone:string,
  password:string
}

const SignUp = () => {  
  const [formData, setFormData]=useState<user>({
    name:"",
    email:"",
    phone:"",
    password:""
  })
  function test(){
    console.log(formData);
  }
  return (
    <div className="flex flex-col">
        <input type="text" placeholder="Name" onChange={(e)=>{setFormData({...formData,name:e.target.value})}}/>
        <input type="text" placeholder="Email" onChange={(e)=>{setFormData({...formData,email:e.target.value})}}/>
        <input type="text" placeholder="Phone Number" onChange={(e)=>{setFormData({...formData,phone:e.target.value})}}/>
        <input type="password" placeholder="Password" onChange={(e)=>{setFormData({...formData,password:e.target.value})}}/>
        <Button onclick={test}>Submit</Button>
    </div>
  )
}

export default SignUp
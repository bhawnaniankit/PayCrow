import {  FieldValues, UseFormRegister } from "react-hook-form"

interface InputLabelProps{
  label:string,
  placeholder:string,
  type:string,
  className?:string,
  onchange?:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

export const Input = ({label,placeholder,type,className,onchange}:InputLabelProps):JSX.Element => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <input className="outline-none" onChange={onchange} type={type} placeholder={placeholder}/>
    </div>
  )
}

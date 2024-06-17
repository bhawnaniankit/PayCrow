
interface InputLabelProps{
  placeholder:string,
  type:string,
  className?:string,
  require?:boolean,
  onchange?:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

export const Input = ({placeholder,type,className,require,onchange}:InputLabelProps):JSX.Element => {
  return (
    <div className={` bg-white shadow flex flex-col gap-1 ${className}`}>
      <input className=" bg-inherit outline-none" onChange={onchange} type={type} placeholder={placeholder}/>
    </div>
  )
}

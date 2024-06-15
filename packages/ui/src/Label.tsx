interface LabelProps{
    lable:string,
    className?:string
}

export const Label = ({lable,className}:LabelProps) => {
  return (
    <label className={`text-lg bold ${className}`}>{lable}</label>
  )
}

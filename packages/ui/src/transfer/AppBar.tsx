import Link from "next/link"
import { getServerSession } from "next-auth";

interface optionProp{
  title:string,
  icon:string,
  href:string,
  alt:string,
}

export const AppBar = async({listOfOptions,authOptions}:{listOfOptions:optionProp[],authOptions:object}) => {
  const session = await getServerSession( authOptions );
  return (
    session?.user?
    (<>
      <div id="drawer-navigation" className=" sticky max-w-60 left-0 md:w-[20%] h-screen md:p-4 overflow-y-auto transition-transform bg-white dark:bg-black" aria-labelledby="drawer-navigation-label">
        <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              {
                listOfOptions.map((option)=>{
                  return <Option title={option.title} icon={option.icon} href={option.href} alt={option.alt} />
                })
              }
            </ul>
        </div>
      </div>
    </>):""
  )
}


export const Option = ({title,icon,href,alt}:optionProp) => {
  return (
    <li key={title}>
        <Link href={href} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <img className=' w-5 h-5' src={icon} alt={alt} />
          <span className="ms-3 hidden md:inline-block">{title}</span>
        </Link>
    </li>
  )
}

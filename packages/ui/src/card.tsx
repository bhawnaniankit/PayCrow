export function Card({className,children}: {
  className?: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className={` text-sm md:border md:shadow md:border-gray-300 bg-slate-50 rounded-md ${className}`}>
      {children}
    </div>
  );
}

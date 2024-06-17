export function Card({className,children}: {
  className?: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className={`md:border md:shadow md:border-gray-300 md:hover:bg-slate-50 rounded-md ${className}`}>
      {children}
    </div>
  );
}

export function Card({className,children}: {
  className?: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className={`border card border-gray-300 hover:bg-slate-50 rounded-md ${className}`}>
      {children}
    </div>
  );
}

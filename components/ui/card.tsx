
export function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`rounded-xl border border-gray-700 bg-zinc-900 shadow-md ${className}`}>{children}</div>;
}

export function CardContent({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

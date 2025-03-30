export function Button({ children, className, ...props }: any) {
  return (
    <button
      className={`bg-white text-black py-2 px-4 rounded-xl hover:bg-gray-200 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

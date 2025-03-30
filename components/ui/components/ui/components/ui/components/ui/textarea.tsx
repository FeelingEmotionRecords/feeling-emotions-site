export function Textarea(props: any) {
  return (
    <textarea
      className="w-full px-3 py-2 rounded-lg bg-zinc-800 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
      {...props}
    />
  );
}

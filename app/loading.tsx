export default function Loading() {
  return (
    <div className="container-farm py-32">
      <div className="flex items-center gap-3 text-olive-700">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inset-0 animate-ping rounded-full bg-gold-400 opacity-70" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-500" />
        </span>
        <span className="text-sm font-medium uppercase tracking-[0.2em]">
          Loading
        </span>
      </div>
    </div>
  );
}

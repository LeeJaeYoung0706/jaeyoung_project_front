export default function Loading() {
  console.log("test1122");
  return (
    <div className="w-full px-6 py-10 space-y-6 animate-pulse">
      {/* Title */}
      <div className="h-8 w-1/3 rounded-xl bg-brand-300"></div>

      {/* Card list skeleton */}
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-28 rounded-2xl bg-brand-200"></div>
        ))}
      </div>
    </div>
  );
}

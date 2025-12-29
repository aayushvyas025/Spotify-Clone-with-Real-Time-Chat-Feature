function AlbumSkeleton() {
  return (
    <div className="relative min-h-full p-6 animate-pulse">
      <div className="flex gap-6 mb-8">
        <div className="w-40 h-40 bg-gray-700 rounded-xl" />
        <div className="flex-1 space-y-4">
          <div className="h-6 w-1/3 bg-gray-700 rounded" />
          <div className="h-4 w-1/4 bg-gray-700 rounded" />
          <div className="h-4 w-1/5 bg-gray-700 rounded" />
        </div>
      </div>

      <div className="h-12 w-32 bg-gray-700 rounded-full mb-6" />

      <div className="space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-12 bg-gray-700 rounded-lg" />
        ))}
      </div>
    </div>
  );
}

export default AlbumSkeleton;

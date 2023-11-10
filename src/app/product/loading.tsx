export default function Loading() {
  return (
    <div className="flex h-full items-center justify-center gap-4 rounded-full">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-300 border-t-primary" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

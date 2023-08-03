export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="animate-spin border-4 border-x-violet-600 border-y-transparent h-5 w-5 rounded-full"></div>
    </div>
  );
}

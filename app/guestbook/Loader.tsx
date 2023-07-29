import clsx from "clsx";

function Loader({ hide }: { hide: boolean }) {
  return (
    <div
      aria-label="loader"
      className={clsx(
        "absolute z-50 grid place-items-center left-0 top-0 w-[300px] h-full",
        { hidden: !hide }
      )}
    >
      <div className="animate-spin border-4 border-x-violet-600 border-y-transparent h-5 w-5 rounded-full"></div>
    </div>
  );
}

export default Loader;

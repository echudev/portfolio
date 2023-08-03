import clsx from "clsx";

interface Props {
  hide: boolean;
  width?: Widths;
}

export enum Widths {
  full = "w-full",
  small = "w-[120px]",
  medium = "w-[300px]",
  large = "w-[500px]",
}
function Loader({ hide, width = Widths.full }: Props) {
  return (
    <div
      aria-label="loader"
      className={clsx(
        `absolute z-50 grid place-items-center inset-0 h-full ${width}`,
        { hidden: !hide }
      )}
    >
      <div className="animate-spin border-4 border-x-violet-600 border-y-transparent h-5 w-5 rounded-full"></div>
    </div>
  );
}

export default Loader;

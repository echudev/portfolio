interface DividerProps {
  size: "full" | "mid" | "short";
  text?: string;
}
interface Classes {
  full: string;
  mid: string;
  short: string;
}
const classes: Classes = {
  full: "border-t-[1px] border-t-Argent border-opacity-50 w-full",
  mid: "border-t-[1px] border-t-Argent border-opacity-50 w-[50%]",
  short: "border-t-[1px] border-t-Argent border-opacity-50 w-28",
};

const Divider = ({ size, text }: DividerProps) => {
  return (
    <div className="relative flex justify-center mt-3">
      <div className={classes[size]}></div>
      {text && (
        <p className="relative text-sm text-Argent leading-3 bg-transparent px-2 -top-2">
          {text}
        </p>
      )}
      <div className={classes[size]}></div>
    </div>
  );
};

export default Divider;

import Link from "next/link";
import Image from "next/image";

interface ButtonProps {
  text: string;
  link?: string;
  icon?: string;
  height: number;
  width: number;
}

const Button = ({ text, link, icon, height, width }: ButtonProps) => {
  return (
    <>
      {link && icon && (
        <Link href={link} target="_blank">
          <div className="group flex gap-2 border border-gray-500 rounded-sm p-1 bg-black bg-opacity-60  text-xs text-gray-200 transition-all hover:translate-x-[3px] hover:-translate-y-[3px] hover:shadow-3dgreen hover:text-green-300">
            <Image
              className="rounded-full border bg-white group-hover:bg-green-300 transition-all"
              alt={text}
              src={icon}
              width={height}
              height={width}
            />
            <button>{text}</button>
          </div>
        </Link>
      )}
      {link && !icon && (
        <Link href={link} target="_blank">
          <div className="flex gap-2 border border-slate-800 rounded-md p-1 bg-slate-700 bg-opacity-40  text-xs text-Silver hover:brightness-125 font-bold transition-all">
            <button>{text}</button>
          </div>
        </Link>
      )}
      {!link && icon && (
        <div className="flex gap-2 border border-slate-800 rounded-md p-1 bg-slate-700 bg-opacity-40  text-xs text-Silver hover:brightness-125 font-bold transition-all">
          <Image alt={text} src={icon} width={height} height={width} />
          <button>{text}</button>
        </div>
      )}
      {!link && !icon && (
        <div className="flex gap-2 border border-slate-800 rounded-md p-1 bg-slate-700 bg-opacity-40  text-xs text-Silver hover:brightness-125 font-bold transition-all">
          <button>{text}</button>
        </div>
      )}
    </>
  );
};

export default Button;

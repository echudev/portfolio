import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface ButtonProps {
  text: string;
  link?: string;
  icon?: StaticImageData;
  height?: number;
  width?: number;
}

const Button = ({ text, link, icon, height, width }: ButtonProps) => {
  return (
    <>
      {link && icon && (
        <Link href={link} target="_blank">
          <div className="group flex gap-2 border rounded-sm p-1 border-neutral-700 bg-neutral-700 bg-opacity-60  text-xs text-neutral-200 transition-all hover:translate-x-[3px] hover:-translate-y-[3px] hover:shadow-3dgreen hover:text-green-400">
            <Image
              className="bg-transparent invert group-hover:invert-0 rounded-full border border-transparent group-hover:bg-green-400 transition-all"
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
          <div className="flex gap-2 border border-slate-800 rounded-md p-1 bg-slate-700 bg-opacity-40  text-xs text-gray-300 hover:brightness-125 font-bold transition-all">
            <button>{text}</button>
          </div>
        </Link>
      )}
      {!link && icon && (
        <div className="flex gap-2 border border-slate-800 rounded-md p-1 bg-slate-700 bg-opacity-40  text-xs text-gray-300 hover:brightness-125 font-bold transition-all">
          <Image alt={text} src={icon} width={height} height={width} />
          <button>{text}</button>
        </div>
      )}
      {!link && !icon && (
        <div className="flex gap-2 border border-slate-800 rounded-md p-1 bg-slate-700 bg-opacity-40  text-xs text-gray-300 hover:brightness-125 font-bold transition-all">
          <button>{text}</button>
        </div>
      )}
    </>
  );
};

export default Button;

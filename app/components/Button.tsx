import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Gh3Icon } from "./Icons";

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
          <div className="group flex gap-2 border rounded-sm p-1 border-neutral-700 bg-neutral-700 bg-opacity-60 text-xs text-neutral-200 hover:translate-x-[3px] hover:-translate-y-[3px] hover:shadow-3dgreen hover:text-green-400 transition-all duration-75">
            <Gh3Icon />
            <button>{text}</button>
          </div>
        </Link>
      )}
      {link && !icon && (
        <Link href={link} target="_blank">
          <div className="group flex gap-2 border rounded-sm p-1 border-neutral-700 bg-neutral-700 bg-opacity-60 text-xs text-neutral-200 hover:translate-x-[3px] hover:-translate-y-[3px] hover:shadow-3dgreen hover:text-green-400 transition-all duration-75">
            <button>{text}</button>
          </div>
        </Link>
      )}
      {!link && icon && (
        <div className="group flex gap-2 border rounded-sm p-1 border-neutral-700 bg-neutral-700 bg-opacity-60 text-xs text-neutral-200 hover:translate-x-[3px] hover:-translate-y-[3px] hover:shadow-3dgreen hover:text-green-400 transition-all duration-75">
          <Image alt={text} src={icon} width={height} height={width} />
          <button>{text}</button>
        </div>
      )}
      {!link && !icon && (
        <div className="group flex gap-2 border rounded-sm p-1 border-neutral-700 bg-neutral-700 bg-opacity-60 text-xs text-neutral-200 hover:translate-x-[3px] hover:-translate-y-[3px] hover:shadow-3dgreen hover:text-green-400 transition-all duration-75">
          <button>{text}</button>
        </div>
      )}
    </>
  );
};

export default Button;

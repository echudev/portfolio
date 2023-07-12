import Link from "next/link";
import { Gh3Icon } from "./Icons";

interface ButtonProps {
  text: string;
  link: string;
}

const Button = ({ text, link }: ButtonProps) => {
  return (
    <Link href={link} target="_blank">
      <div className="group flex gap-2 border rounded-sm p-1 border-neutral-700 hover:border-transparent bg-neutral-700 bg-opacity-60 text-xs text-neutral-200 hover:translate-x-[3px] hover:-translate-y-[3px] hover:shadow-3dgreen hover:text-green-400 transition-all duration-75">
        <Gh3Icon />
        <button>{text}</button>
      </div>
    </Link>
  );
};

export default Button;

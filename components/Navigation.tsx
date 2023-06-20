"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavLink {
  name: string;
  href: string;
  width: number;
}
const navLinks: NavLink[] = [
  { name: "Inicio", href: "/", width: 80 },
  { name: "Proyectos", href: "/projects", width: 110 },
  { name: "Recursos", href: "/resources", width: 100 },
];

const Navigation = () => {
  const pathname = usePathname();
  const [hoverWidth, setHoverWidth] = useState<Number>(0);
  const [hoverLeft, setHoverLeft] = useState<Number>(0);
  const [hoverBgColor, setHoverBgColor] = useState<String>("Argent");

  function handleMouseEnter(event: React.MouseEvent<HTMLAnchorElement>) {
    let targetElement = event.target as HTMLAnchorElement;
    let { offsetLeft, offsetWidth } = targetElement;
    setHoverWidth(offsetWidth);
    setHoverLeft(offsetLeft);
    setHoverBgColor("Argent");
  }
  function handleMouseLeave() {
    setHoverBgColor("transparent");
  }

  return (
    <nav className={`relative mx-auto mt-5 w-[290px] h-10 text-Argent`}>
      {navLinks.map((link, i) => {
        let isActive: boolean;

        if (link.href === "/inicio") {
          isActive = pathname.startsWith(link.href);
        } else {
          isActive = pathname === link.href;
        }

        return (
          <Link
            key={i}
            href={link.href}
            onMouseEnter={(e) => handleMouseEnter(e)}
            onMouseLeave={handleMouseLeave}
            className={
              isActive
                ? `text-Doctor relative text-center inline-block z-10 w-[${link.width}px] leading-10 hover:text-Doctor transition pb-3 border-b-2 border-Doctor`
                : `relative text-center inline-block z-10 w-[${link.width}px] leading-10 hover:text-Doctor transition`
            }
          >
            {link.name}
          </Link>
        );
      })}
      <div
        className={`absolute z-0 top-0 left-[${hoverLeft}px] h-full rounded-md transistion bg-${hoverBgColor} bg-opacity-40 w-[${hoverWidth}px] transition-all`}
      ></div>
    </nav>
  );
};

export default Navigation;

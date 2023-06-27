"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

interface NavLink {
  name: string;
  href: string;
  style: string;
  activeStyle: string;
}
const navLinks: NavLink[] = [
  {
    name: "Inicio",
    href: "/",
    style:
      "relative text-center inline-block z-10 w-[80px] leading-10 hover:text-Doctor transition",
    activeStyle: `text-Doctor relative text-center inline-block z-10 w-[80px] leading-10 hover:text-Doctor transition pb-2 border-b-2 border-Doctor `,
  },
  {
    name: "Proyectos",
    href: "/projects",
    style:
      "relative text-center inline-block z-10 w-[110px] leading-10 hover:text-Doctor transition",
    activeStyle: `text-Doctor relative text-center inline-block z-10 w-[110px] leading-10 hover:text-Doctor transition pb-2 border-b-2 border-Doctor `,
  },
  {
    name: "Recursos",
    href: "/resources",
    style:
      "relative text-center inline-block z-10 w-[100px] leading-10 hover:text-Doctor transition",
    activeStyle: `text-Doctor relative text-center inline-block z-10 w-[100px] leading-10 hover:text-Doctor transition pb-2 border-b-2 border-Doctor `,
  },
];

const Navigation = () => {
  const pathname = usePathname();
  const hoverBkg = useRef<HTMLDivElement>(null);

  function handleMouseEnter(event: React.MouseEvent<HTMLAnchorElement>) {
    let targetElement = event.target as HTMLAnchorElement;
    let { offsetLeft, offsetWidth } = targetElement;
    if (hoverBkg.current) {
      hoverBkg.current.style.left = `${offsetLeft}px`;
      hoverBkg.current.style.width = `${offsetWidth}px`;
      hoverBkg.current.style.backgroundColor = "rgba(68, 68, 68, 0.5)";
    }
  }
  function handleMouseLeave() {
    if (hoverBkg.current) {
      hoverBkg.current.style.backgroundColor = "transparent";
    }
  }

  return (
    <nav className="w-screen mt-2 pb-2 z-50 border-b-[1px] border-Argent">
      <div
        aria-label="navLinks container"
        className="relative mx-auto w-[290px] h-10 text-Argent select-none"
      >
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
              className={isActive ? link.activeStyle : link.style}
            >
              {link.name}
            </Link>
          );
        })}
        <div
          aria-label="background hover effect"
          ref={hoverBkg}
          className={`absolute z-0 top-0 h-full rounded-md transistion bg-opacity-40 transition-all`}
        ></div>
      </div>
    </nav>
  );
};

export default Navigation;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  href: string;
}
const navLinks: NavLink[] = [
  { name: "Inicio", href: "/" },
  { name: "Proyectos", href: "/projects" },
  { name: "Recursos", href: "/resources" },
];

interface Styles {
  active: string;
  noActive: string;
}
const styles: Styles = {
  active:
    "relative text-Doctor hover:bg-Argent hover:bg-opacity-20 py-2 px-3 rounded-lg transition after:border-b-2 after:absolute after:h-full after:w-full after:-translate-x-[calc(100%-12px)] after:border-Doctor after:transition",
  noActive:
    "text-Argent hover:text-Doctor hover:bg-Argent hover:bg-opacity-20 py-2 px-3 rounded-lg transition after:border-b-2 after:absolute after:h-full after:w-0 after:-translate-x-[calc(100%-12px)] after:border-Doctor after:transition",
};

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row w-full justify-center gap-6 p-2 select-none border-b-[0.5px] border-Argent border-opacity-40">
      {navLinks.map((link, i) => {
        let isActive: boolean;

        if (link.href === "/inicio") {
          isActive = pathname.startsWith(link.href);
        } else {
          isActive = pathname === link.href;
        }

        return (
          <Link
            className={isActive ? styles.active : styles.noActive}
            key={i}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;

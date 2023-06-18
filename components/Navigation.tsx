"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  href: string;
}
const navLinks: NavLink[] = [
  { name: "inicio", href: "/" },
  { name: "proyectos", href: "/projects" },
  { name: "recursos", href: "/resources" },
];

interface Styles {
  active: string;
  noActive: string;
}
const styles: Styles = {
  active:
    "text-SugarGlaze bg-gray-600 bg-opacity-30 py-2 px-3 rounded-lg transition",
  noActive: "text-Archeology bg-transparent py-2 px-3 transition",
};

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row w-full justify-center gap-6 p-4 uppercase select-none">
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

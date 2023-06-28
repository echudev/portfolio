"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion } from "framer-motion";
import clsx from "clsx";

const navLinks = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Proyectos",
    href: "/projects",
  },
  {
    name: "Recursos",
    href: "/resources",
  },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="w-screen mt-2 pb-2 z-10 border-b border-white border-opacity-20">
      <LayoutGroup>
        <div
          aria-label="link container"
          className="flex justify-center h-10 text-neutral-400 select-none"
        >
          {navLinks.map((link, i) => {
            let isActive = pathname === link.href;

            return (
              <Link
                key={i}
                href={link.href}
                className={clsx(
                  "relative text-center inline-block z-10 px-3 mx-1 leading-10 hover:text-white transition-all",
                  { "text-white": isActive }
                )}
              >
                {link.name}

                {isActive ? (
                  <motion.div
                    className="absolute inset-0 rounded-md border border-neutral-400 bg-neutral-400 bg-opacity-5 z-[-1]"
                    layoutId="sidebar"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                ) : null}
              </Link>
            );
          })}
        </div>
      </LayoutGroup>
    </nav>
  );
};

export default Navigation;

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
    name: "Contacto",
    href: "/contact",
  },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full max-w-2xl mt-2 z-10">
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
        <div className="w-full h-[1px] mt-3 bg-gradient-to-r from-transparent from-0% via-neutral-500 via-50% to-transparent-500 to-100%"></div>
      </LayoutGroup>
    </nav>
  );
};

export default Navigation;

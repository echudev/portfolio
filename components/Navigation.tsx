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
    <nav className="w-screen mt-2 pb-2 z-10 border-b border-black">
      <LayoutGroup>
        <div
          aria-label="link container"
          className="flex justify-center h-10 text-Argent select-none"
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
                className={clsx(
                  "relative text-center inline-block z-10 px-3 mx-1 leading-10 hover:text-Doctor",
                  { "text-Doctor": isActive }
                )}
              >
                {link.name}

                {isActive ? (
                  <motion.div
                    className="absolute inset-0 bg-gray-500 bg-opacity-30 rounded-md z-[-1]"
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

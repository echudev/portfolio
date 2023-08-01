"use client";
import Link from "next/link";
import { TwIcon, Gh2Icon, MailIcon } from "./Icons";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion } from "framer-motion";
import clsx from "clsx";

const navLinks = [
  {
    id: 0,
    name: "Inicio",
    href: "/",
  },
  {
    id: 1,
    name: "Proyectos",
    href: "/projects",
  },
  {
    id: 2,
    name: "Visitas",
    href: "/guestbook",
  },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full max-w-2xl mt-10 z-10">
      <LayoutGroup>
        <div
          aria-label="link container"
          className="flex h-10 text-neutral-400 mx-5 select-none border-b border-neutral-700 shadow-md"
        >
          {navLinks.map((link, i) => {
            let isActive = pathname === link.href;

            return (
              <Link
                key={i}
                href={link.href}
                className={clsx(
                  "font-bold relative text-center inline-block z-10 px-2 leading-10 hover:text-violet-500 transition-all",
                  { "text-white": isActive }
                )}
              >
                {link.name}

                {isActive ? (
                  <motion.div
                    className="absolute inset-0 border-b-2 border-violet-500 z-[-1]"
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
          <div
            aria-label="divisor"
            className="mr-7 ml-auto border-l-[1px] border-neutral-300 opacity-30 h-1/2 translate-y-1/2"
          ></div>
          <div
            aria-label="contacto"
            className="flex items-end mb-[10px] mr-5 gap-3 cursor-pointer"
          >
            <Link href="https://twitter.com/echudev" target="_blank">
              <TwIcon />
            </Link>
            <Link href="https://github.com/echudev" target="_blank">
              <Gh2Icon />
            </Link>
            <Link href="mailto:ez.devrel@gmail.com" target="_blank">
              <MailIcon />
            </Link>
          </div>
        </div>
      </LayoutGroup>
    </nav>
  );
};

export default Navigation;

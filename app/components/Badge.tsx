import Image, { StaticImageData } from "next/image";

interface BadgeProps {
  href: string;
  text: string;
  src: StaticImageData;
}

function Badge({ href, src, text }: BadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="mx-1 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex top-[2.6px] relative items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    >
      <Image className="mr-1" alt="" src={src} width={16} height={16} />
      <p>{text}</p>
    </a>
  );
}

export default Badge;

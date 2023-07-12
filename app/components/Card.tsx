import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "@/lib/getProjects";
import Button from "./Button";

interface CardProps {
  data: ProjectData;
}

const Card = ({ data }: CardProps) => {
  return (
    <div
      key={data.id}
      className="rounded-lg m-3 flex flex-1 flex-col max-w-xs min-w-[270px] p-1 shadow"
    >
      <Link href={data.link.app} target="_blank">
        <Image
          className="rounded cursor-pointer hover:translate-x-[6px] hover:-translate-y-[6px] hover:shadow-3d transition-all"
          alt={data.name}
          src={data.cover}
          width={1280}
          height={720}
          placeholder="blur"
          blurDataURL={data.blurDataURL}
        />
      </Link>
      <div className="flex items-start m-1 cursor-pointer">
        <p className="font-bold">{data.name}</p>
      </div>
      <p className="text-sm text-neutral-400 m-1">{data.description}</p>

      <div
        aria-label="skills icon container"
        className="flex flex-row items-center gap-3 mx-1 mt-2 mb-4"
      >
        {data.tags.map((skill, i) => (
          <div key={i} className="group relative">
            <Image
              className="grayscale cursor-pointer hover:grayscale-0 transition-all"
              alt={skill.name}
              src={skill.img}
              width={25}
              height={25}
            />
            <div
              aria-label="popup"
              className="group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 text-white px-2 py-1 text-sm rounded-md bg-slate-900 border border-slate-800 z-10 opacity-0 pointer-events-none"
            >
              {skill.name}
            </div>
          </div>
        ))}
        <div className="ml-auto">
          <Button text="código" link={data.link.repo} />
        </div>
      </div>
    </div>
  );
};

export default Card;

import Image from "next/image";
import { ProjectData } from "@/types";

interface CardProps {
  data: ProjectData;
}

const Card = ({ data }: CardProps) => {
  return (
    <div key={data.id} className="rounded-lg m-3 max-w-xs p-1">
      <Image
        className="rounded-lg border border-Coalmine cursor-pointer"
        alt={data.name}
        src={data.cover}
        width={1280}
        height={720}
        placeholder="blur"
        blurDataURL={data.blurDataURL}
      />
      <p className="font-bold m-1 cursor-pointer">{data.name}</p>
      <p className="text-sm text-Silver m-1">{data.description}</p>
      <div className="flex flex-row gap-3 m-1">
        {data.tags.map((skill, i) => (
          <div key={i} className="group relative">
            <Image
              className="grayscale cursor-pointer hover:grayscale-0 transition-all"
              alt={skill.name}
              src={skill.img}
              width={30}
              height={30}
            />
            <div
              aria-label="popup"
              className="group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 text-Doctor px-2 py-1 text-sm rounded-md bg-slate-900 border border-slate-800 z-10 opacity-0 pointer-events-none"
            >
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

import Image from "next/image";
import { ProjectData } from "@/types";

interface ComponentProps {
  data: ProjectData;
}

const Card: React.FC<ComponentProps> = ({ data }) => {
  return (
    <div
      key={data.id}
      className="bg-Onyx bg-opacity-40 rounded-lg m-3 max-w-xs p-1 shadow-md shadow-Coalmine border border-Coalmine"
    >
      <Image
        className="rounded-lg border border-Coalmine"
        alt={data.name}
        src={data.cover}
        width={1280}
        height={720}
        placeholder="blur"
        blurDataURL={data.blurDataURL}
      />
      <p className="m-2">{data.name}</p>
      <p className="text-sm text-Silver m-2">{data.description}</p>
      <div className="flex flex-row gap-3 mx-2 my-3">
        {data.tags.map((skill, i) => (
          <Image
            key={i}
            className=""
            alt={skill.name}
            src={skill.img}
            width={30}
            height={30}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;

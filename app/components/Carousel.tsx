"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import pokemonCover from "../../public/covers/pokemem.png";
import nflxCover from "../../public/covers/netflix.jpg";
import taskerCover from "../../public/covers/tasker.jpg";
import calcCover from "../../public/covers/calculadora.jpg";
import sheldonCover from "../../public/covers/sheldon.jpg";

interface Image {
  source: StaticImageData;
  alt: string;
}

const Carousel = () => {
  const images: Image[] = [
    { source: pokemonCover, alt: "pokemon memotest" },
    { source: nflxCover, alt: "clon netflix" },
    { source: taskerCover, alt: "tasker app" },
    { source: calcCover, alt: "splitter" },
    { source: sheldonCover, alt: "sheldon game" },
    { source: pokemonCover, alt: "pokemon memotest" },
    { source: nflxCover, alt: "clon netflix" },
    { source: taskerCover, alt: "tasker app" },
    { source: calcCover, alt: "splitter" },
    { source: sheldonCover, alt: "sheldon game" },
  ];

  return (
    <div className="relative my-10 mx-2">
      <div className="flex">
        <p>
          Te invito a que pases por la sección proyectos y veas algunas de las
          aplicaciones en las que trabajé actualmente:
        </p>
      </div>
      <Link
        href="/projects"
        className="absolute right-0 bottom-0 mr-10 translate-y-1/2 z-30 px-3 py-1  bg-violet-700 rounded shadow shadow-violet-900 hover:bg-violet-500 transition-all"
      >
        proyectos
      </Link>
      <div
        aria-label="wraper"
        className="group relative rounded my-5 h-[120px] flex items-center select-none overflow-hidden"
      >
        <div
          aria-label="slider"
          className="absolute w-fit animate-scroll left-0 flex brightness-50 group-hover:animate-scroll2"
        >
          {images.map((image, i) => (
            <Image
              key={i}
              style={{ width: "250px", borderRadius: "4px" }}
              src={image.source}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

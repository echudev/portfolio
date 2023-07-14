"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import pokemonCover from "../../public/images/pokemem/cover-pokemem.png";
import nflxCover from "../../public/images/netflixclon/cover-netflix.jpg";
import taskerCover from "../../public/images/tasker/cover-tasker.jpg";
import calcCover from "../../public/images/calculadora/cover-calculadora.jpg";

interface Image {
  ref: React.RefObject<HTMLImageElement>;
  source: StaticImageData;
  alt: string;
}

const Carousel = () => {
  const img1 = useRef<HTMLImageElement | null>(null);
  const img2 = useRef<HTMLImageElement | null>(null);
  const img3 = useRef<HTMLImageElement | null>(null);
  const img4 = useRef<HTMLImageElement | null>(null);
  const images: Image[] = [
    { ref: img1, source: pokemonCover, alt: "pokemon memotest" },
    { ref: img2, source: nflxCover, alt: "clon netflix" },
    { ref: img3, source: taskerCover, alt: "tasker app" },
    { ref: img4, source: calcCover, alt: "splitter" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const automaticNextImgInterval = setInterval(() => {
  //     setCurrentIndex(currentIndex + 1);
  //     if (currentIndex >= 3) {
  //       setCurrentIndex(0);
  //     }
  //   }, 4000);

  //   return () => {
  //     clearInterval(automaticNextImgInterval);
  //   };
  // }, [currentIndex]);

  return (
    <div className="relative my-10 mx-2">
      <div className="flex">
        <p>
          te invito a que pases por la sección proyectos y veas algunas de las
          aplicaciones en las que trabajé actualmente
        </p>
      </div>
      <Link
        href="/projects"
        className="z-30 px-3 py-1 mr-10 absolute right-0 bottom-0 translate-y-1/2 bg-violet-700 rounded shadow shadow-violet-900 hover:bg-violet-500 transition-all"
      >
        ver proyectos
      </Link>
      <div className="group relative my-5 p-4 h-24 flex shadow-md rounded select-none overflow-hidden">
        <div
          aria-label="images container"
          className="absolute inset-0 flex gap-1 -z-10 brightness-75 transition-transform duration-[10000s]"
        >
          {images.map((image, i) => (
            <Image
              key={i}
              ref={image.ref}
              className=""
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

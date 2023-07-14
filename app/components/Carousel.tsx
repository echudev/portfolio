"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import pokemonCover from "../../public/images/cover-pokemem.png";
import nflxCover from "../../public/images/cover-netflix.jpg";
import taskerCover from "../../public/images/cover-tasker.jpg";
import calcCover from "../../public/images/cover-calculadora.jpg";
import sheldonCover from "../../public/images/cover-sheldon.jpg";

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
  const img5 = useRef<HTMLImageElement | null>(null);
  const images: Image[] = [
    { ref: img1, source: pokemonCover, alt: "pokemon memotest" },
    { ref: img2, source: nflxCover, alt: "clon netflix" },
    { ref: img3, source: taskerCover, alt: "tasker app" },
    { ref: img4, source: calcCover, alt: "splitter" },
    { ref: img5, source: sheldonCover, alt: "sheldon game" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const automaticNextImgInterval = setInterval(() => {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex >= 3) {
        setCurrentIndex(0);
      }
    }, 4000);

    return () => {
      clearInterval(automaticNextImgInterval);
    };
  }, [currentIndex]);

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
        className="z-30 px-3 py-1 mr-10 absolute right-0 bottom-0 bg-violet-700 rounded shadow shadow-violet-900 hover:bg-violet-500 transition-all"
      >
        ver proyectos
      </Link>
      <div className="group relative my-5 h-[120px] flex items-center select-none overflow-hidden">
        <div
          aria-label="images container"
          className="absolute gap-1 left-0 flex -z-10 brightness-75 transition-transform duration-[10000s]"
        >
          {images.map((image, i) => (
            <Image
              key={i}
              ref={image.ref}
              className={clsx("", { "-translate-x-full": i === currentIndex })}
              style={{
                width: "calc(33% - 4px)",
                borderRadius: "4px",
                transition: ".3s ease-in-out",
              }}
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

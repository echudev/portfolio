"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import pokemonCover from "../../public/images/pokemem/cover-pokemem.png";
import nflxCover from "../../public/images/netflixclon/cover-netflix.jpg";
import taskerCover from "../../public/images/tasker/cover-tasker.jpg";
import calcCover from "../../public/images/calculadora/cover-calculadora.jpg";
import prevBtnIcon from "../../public/icons/icon-previous.svg";
import nextBtnIcon from "../../public/icons/icon-next.svg";

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
  const title = useRef<HTMLImageElement | null>(null);
  const images: Image[] = [
    { ref: img1, source: pokemonCover, alt: "pokemon memotest" },
    { ref: img2, source: nflxCover, alt: "clon netflix" },
    { ref: img3, source: taskerCover, alt: "tasker app" },
    { ref: img4, source: calcCover, alt: "splitter" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextBtn = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex >= 3) {
      setCurrentIndex(0);
    }
  };
  const handlePrevBtn = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex <= 0) {
      setCurrentIndex(3);
    }
  };

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
    <div className="mt-20 mx-2">
      <div ref={title} className="relative">
        {images.map((img, i) => (
          <h4
            key={i}
            className={clsx(
              "absolute ml-1 -top-7 font-bold text-lg -translate-x-96 transition-transform duration-500",
              {
                "translate-x-0": i === currentIndex,
              }
            )}
          >
            {img.alt}
          </h4>
        ))}
      </div>
      <div className="group relative p-4 aspect-video flex flex-col shadow-md select-none overflow-hidden">
        <div
          aria-label="images container"
          className="absolute inset-0 flex gap-2 -z-10 brightness-75 group-hover:brightness-50 transition-all"
        >
          {images.map((image, i) => (
            <Image
              key={i}
              ref={image.ref}
              className={clsx("transition duration-1000 opacity-0 rounded", {
                "opacity-100": i === currentIndex,
              })}
              src={image.source}
              alt={image.alt}
              fill
            />
          ))}
        </div>
        <button
          onClick={handleNextBtn}
          className="invert hover:scale-125 rounded-full flex items-center absolute right-0 mx-5 p-1 top-1/2 -translate-y-1/2 translate-x-96 group-hover:translate-x-0 transition-transform ease-in-out"
        >
          <Image alt="next-btn" src={nextBtnIcon} width={20} height={20} />
        </button>
        <button
          onClick={handlePrevBtn}
          className="invert hover:scale-125 rounded-full flex items-center absolute left-0 mx-5 p-1 top-1/2 -translate-y-1/2 -translate-x-96 group-hover:translate-x-0 transition-transform ease-in-out"
        >
          <Image alt="prev-btn" src={prevBtnIcon} width={20} height={20} />
        </button>

        <Link
          href="/projects"
          className="absolute bottom-0 right-0 m-5 py-1 px-3 flex justify-center items-center translate-y-96 group-hover:translate-y-0
           bg-violet-700 rounded-md  shadow shadow-violet-900 hover:bg-violet-500 transition-all ease-in-out"
        >
          ver más
        </Link>
      </div>
      <ul className="mt-2 flex justify-center gap-2 cursor-pointer">
        {Array.from({ length: 4 }).map((_, i) => (
          <li
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={clsx(
              "h-1 w-3 rounded-full border border-neutral-400 bg-neutral-300 transition-all",
              {
                "bg-violet-500 border border-violet-600": i === currentIndex,
              }
            )}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;

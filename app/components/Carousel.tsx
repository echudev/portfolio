"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import pokemonCover from "../../public/images/pokemem/cover-pokemem.png";
import nflxCover from "../../public/images/netflixclon/cover-netflix.jpg";
import sheldonCover from "../../public/images/sheldongame/cover-sheldon.jpg";
import calcCover from "../../public/images/calculadora/cover-calculadora.jpg";
import prevBtnIcon from "../../public/icons/icon-previous.svg";
import nextBtnIcon from "../../public/icons/icon-next.svg";

const Carousel = () => {
  const img1 = useRef<HTMLImageElement | null>(null);
  const img2 = useRef<HTMLImageElement | null>(null);
  const img3 = useRef<HTMLImageElement | null>(null);
  const img4 = useRef<HTMLImageElement | null>(null);
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
    const handlerImgOpacity = () => {
      const imgArray = [img1.current, img2.current, img3.current, img4.current];
      imgArray.map((img, i) => {
        if (img !== null) {
          i === currentIndex
            ? (img.style.opacity = "1")
            : (img.style.opacity = "0");
        }
      });
    };

    const automaticNextImgInterval = setInterval(() => {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex >= 3) {
        setCurrentIndex(0);
      }
    }, 4000);

    handlerImgOpacity();

    return () => {
      handlerImgOpacity();
      clearInterval(automaticNextImgInterval);
    };
  }, [currentIndex]);

  return (
    <div className="my-10 mx-2 shadow-lg">
      <div className="group relative p-4 w-[full] aspect-video flex flex-col shadow-md select-none overflow-hidden">
        <div
          aria-label="images container"
          className="absolute inset-0 flex gap-2 -z-10 brightness-75 transition-all"
        >
          <Image
            ref={img1}
            style={{ transition: "1s", opacity: "0", borderRadius: "4px" }}
            src={pokemonCover}
            alt="pokemon"
            fill
          />
          <Image
            ref={img2}
            style={{ transition: "1s", opacity: "0", borderRadius: "4px" }}
            src={nflxCover}
            alt="netflix clon"
            fill
          />
          <Image
            ref={img3}
            style={{ transition: "1s", opacity: "0", borderRadius: "4px" }}
            src={sheldonCover}
            alt="sheldon game"
            fill
          />
          <Image
            ref={img4}
            style={{ transition: "1s", opacity: "0", borderRadius: "4px" }}
            src={calcCover}
            alt="calculator"
            fill
          />
        </div>
        <button
          onClick={handleNextBtn}
          className="invert rounded-full flex items-center absolute right-0 mx-5 p-1 top-1/2 -translate-y-1/2 translate-x-96 group-hover:translate-x-0 transition-transform ease-in-out"
        >
          <Image alt="next-btn" src={nextBtnIcon} width={20} height={20} />
        </button>
        <button
          onClick={handlePrevBtn}
          className="invert rounded-full flex items-center absolute left-0 mx-5 p-1 top-1/2 -translate-y-1/2 -translate-x-96 group-hover:translate-x-0 transition-transform ease-in-out"
        >
          <Image alt="prev-btn" src={prevBtnIcon} width={20} height={20} />
        </button>

        <ul className="absolute bottom-0 mb-2 left-1/2 -translate-x-1/2 flex gap-2 cursor-pointer">
          {Array.from({ length: 4 }).map((_, i) => (
            <li
              onClick={() => setCurrentIndex(i)}
              key={i}
              className={clsx(
                "h-2 w-2 rounded-full bg-neutral-100 opacity-75 transition-opacity",
                { "bg-violet-500 opacity-100": i === currentIndex }
              )}
            ></li>
          ))}
        </ul>
      </div>
      <div className="mt-5 w-full flex justify-between">
        <p>pasa a ver mis proyectos!</p>
        <Link
          href="/projects"
          className="flex justify-center items-center bg-violet-700 rounded-md h-10 w-28 shadow-violet-900 hover:bg-violet-500 transition-all shadow"
        >
          ver Proyectos
        </Link>
      </div>
    </div>
  );
};

export default Carousel;

import react from "../public/icons/react.png";
import redux from "../public/icons/redux.png";
import next from "../public/icons/nextjs.png";
import ts from "../public/icons/ts.png";
import css from "../public/icons/css.png";
import twnd from "../public/icons/tailwind.png";
import mui from "../public/icons/mui.png";
import firebase from "../public/icons/firebase.png";
import Badge from "./components/Badge";
import Button from "./components/Button";
import Image from "next/image";
import pokemonCover from "../public/images/pokemem/cover-pokemem.png";
import nflxCover from "../public/images/netflixclon/cover-netflix.jpg";
import sheldonCover from "../public/images/sheldongame/cover-sheldon.jpg";
import calculatorCover from "../public/images/calculadora/cover-calculadora.jpg";
import Link from "next/link";

function HomePage() {
  return (
    <section className="p-3 w-full">
      <div className="rounded p-3">
        <h1 className="text-3xl my-5 text-neutral-100">
          ¡Hola! Soy Ezequiel 🫡
        </h1>
        <span className="page-break-after: always;">
          {
            "Soy un desarrollador Frontend con más de 2 años de experiencia en la creación de aplicaciones web utilizando tecnologías como"
          }
          <Badge href={"https://www.google.com"} src={react} text={"React"} />
          {","}
          <Badge href={"https://www.google.com"} src={redux} text={"Redux"} />
          {","}
          <Badge href={"https://www.google.com"} src={next} text={"Nextjs"} />
          {"y"}
          <Badge href={"https://www.google.com"} src={ts} text={"Typescript"} />
          {"."}
        </span>
        <br />
        <br />
        <span>
          {"Para el diseño y estilados, puedo manejar varias bibliotecas"}
          <Badge href={""} src={css} text={"CSS"} />
          {"como"}
          <Badge href={""} src={twnd} text={"Tailwind"} />
          {"y"}
          <Badge href={""} src={mui} text={"Material UI"} />
          {"entre otras, creando interfaces atractivas y funcionales."}
        </span>
        <br />
        <br />
        <span>
          {
            "En cuanto a autenticación y almacenamiento de datos en la nube, suelo trabajar con"
          }
          <Badge href={""} src={firebase} text={"Firebase"} />
          {
            ", pudiendo adaptarme a nuevas tecnologías si el proyecto lo requiere."
          }
        </span>
      </div>
      <div className="flex flex-col justify-around border border-neutral-500 rounded p-3 my-5 select-none ">
        <h3 className="mb-5">Dejá un mensaje en la sección de visitas 🙂</h3>
        <div className="flex">
          <div
            aria-label="images container"
            className="group flex flex-col relative min-h-[140px] min-w-[250px] cursor-pointer"
          >
            <Image
              className="absolute shadow rounded hover:z-50"
              src={pokemonCover}
              alt="pokemon"
              width={250}
              height={150}
            />
            <Image
              className="absolute shadow rounded left-[2%] top-[1%] group-hover:left-[20%] transition-all ease-in-out hover:z-50"
              src={nflxCover}
              alt="netflix clon"
              width={250}
              height={150}
            />
            <Image
              className="absolute rounded shadow left-[4%] top-[2%] group-hover:left-[40%] transition-all ease-in-out hover:z-50"
              src={sheldonCover}
              alt="sheldon game"
              width={250}
              height={150}
            />
            <Image
              className="absolute rounded shadow left-[6%] top-[3%] group-hover:left-[60%] transition-all ease-in-out hover:z-50"
              src={calculatorCover}
              alt="calculator"
              width={250}
              height={150}
            />
          </div>
          <Link
            href="/projects"
            className="ml-auto mt-auto bg-green-500 rounded h-10 w-20"
          >
            ver
          </Link>
        </div>
      </div>

      <div className="flex justify-around border border-neutral-500 rounded p-3 my-5">
        <p>Dejá un mensaje en la sección de visitas 🙂</p>
        <Button
          icon={next}
          text="visitas"
          link="/contact"
          height={20}
          width={20}
        />
      </div>
    </section>
  );
}

export default HomePage;

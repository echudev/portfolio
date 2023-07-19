import react from "../public/icons/react.png";
import redux from "../public/icons/redux.png";
import next from "../public/icons/nextjs.png";
import ts from "../public/icons/ts.png";
import css from "../public/icons/css.png";
import twnd from "../public/icons/tailwind.png";
import mui from "../public/icons/mui.png";
import firebase from "../public/icons/firebase.png";
import Badge from "./components/Badge";
import Carousel from "./components/Carousel";
import Link from "next/link";

function HomePage() {
  return (
    <section className="p-3 w-full">
      <div className="p-3">
        <h1 className="text-2xl my-5 text-neutral-100">hola, soy Ezequiel 🫡</h1>
        <span className="page-break-after: always;">
          {
            "Soy un desarrollador Frontend con más de 2 años de experiencia en la creación de aplicaciones web utilizando tecnologías como"
          }
          <Badge href={"https://es.react.dev/"} src={react} text={"React"} />
          {","}
          <Badge href={"https://redux.js.org/"} src={redux} text={"Redux"} />
          {","}
          <Badge href={"https://nextjs.org/"} src={next} text={"Nextjs"} />
          {"y"}
          <Badge
            href={"https://www.typescriptlang.org/"}
            src={ts}
            text={"Typescript"}
          />
          {"."}
        </span>
        <br />
        <br />
        <span>
          {"Para el diseño y estilados, puedo manejar varias bibliotecas"}
          <Badge
            href={"https://www.w3schools.com/Css/"}
            src={css}
            text={"CSS"}
          />
          {"como"}
          <Badge
            href={"https://tailwindcss.com/"}
            src={twnd}
            text={"Tailwind"}
          />
          {"y"}
          <Badge href={"https://mui.com/"} src={mui} text={"Material UI"} />
          {"entre otras, creando interfaces atractivas y funcionales."}
        </span>
        <br />
        <br />
        <span>
          {
            "En cuanto a autenticación y almacenamiento de datos en la nube, suelo trabajar con"
          }
          <Badge
            href={"https://firebase.google.com/"}
            src={firebase}
            text={"Firebase"}
          />
          {
            ", pudiendo adaptarme a nuevas tecnologías si el proyecto lo requiere."
          }
        </span>
      </div>
      <div className="w-[80%] mx-auto my-6 border-b-[1px] border-neutral-500 border-opacity-30"></div>
      <Carousel />
      <div className="w-[80%] mx-auto my-6 border-b-[1px] border-neutral-500 border-opacity-30"></div>
      <div className="flex flex-col justify-center p-3 my-10 bg-neutral-300 bg-opacity-5 rounded">
        <p>
          Además, si querés y tenés ganas, podes dejar tu comentario en la
          sección visitas 🙂
        </p>
        <Link
          href="/guestbook"
          className="text-center px-3 py-1 mt-3 bg-violet-700 rounded shadow shadow-black hover:bg-violet-500 transition-all"
        >
          voy a comentar!
        </Link>
      </div>
    </section>
  );
}

export default HomePage;

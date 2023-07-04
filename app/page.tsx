import react from "../public/icons/react.png";
import redux from "../public/icons/redux.png";
import next from "../public/icons/nextjs.png";
import ts from "../public/icons/ts.png";
import css from "../public/icons/css.png";
import twnd from "../public/icons/tailwind.png";
import mui from "../public/icons/mui.png";
import firebase from "../public/icons/firebase.png";
import Badge from "./components/Badge";
import Link from "next/link";

function HomePage() {
  return (
    <section className="p-5 w-full">
      <h1 className="text-3xl my-5">¡Hola! Soy Ezequiel M.</h1>
      <span className="page-break-after: always;">
        {
          "Soy un desarrollador Frontend con más de 2 años de experiencia creando aplicaciones web utilizando tecnologías como"
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
        {
          "Para el diseño y estilados, tengo experiencia trabajando con varias bibliotecas"
        }
        <Badge href={""} src={css} text={"CSS"} />
        {"como"}
        <Badge href={""} src={twnd} text={"Tailwind"} />
        {"y"}
        <Badge href={""} src={mui} text={"Material UI"} />
        {"entre otras, para crear interfaces atractivas y funcionales."}
      </span>
      <br />
      <br />
      <span>
        {
          "En cuanto a autenticación y almacenamiento de datos en la nube, suelo trabajar con"
        }
        <Badge href={""} src={firebase} text={"Firebase"} />
        {
          ", pudiendo adaptarme a nuevas tecnologías si el proyecto lo requiere, a fin de lograr un rendimento óptimo."
        }
      </span>
      <br />
      <br />
      <span>
        {"Te invito a explorar algunos de mis proyectos en la siguiente "}
        <Link
          href="/projects"
          className="text-orange-400 hover:text-orange-300 transition-all"
        >
          {"sección"}
        </Link>
        {
          " donde vas a encontrar ejemplos de mi trabajo y así tener una idea de mi estilo y habilidades como desarrollador."
        }
        <br />
        <br />
        {"Si algo captura tu atención o tienes alguna pregunta, no dudes en "}
        <Link
          href="/contact"
          className="text-orange-400 hover:text-orange-300 transition-all"
        >
          {"contactarme"}
        </Link>
        {"  🙂"}
      </span>
    </section>
  );
}

export default HomePage;

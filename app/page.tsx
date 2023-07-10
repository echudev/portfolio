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
import Carousel from "./components/Carousel";

function HomePage() {
  return (
    <section className="p-3 w-full">
      <div className="p-3">
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
      <Carousel />
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

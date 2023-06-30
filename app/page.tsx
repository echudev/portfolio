import Skills from "@/components/Skills";

function HomePage() {
  return (
    <section className="p-3 max-w-2xl mx-auto">
      <h1 className="text-3xl my-5">hola!👋🏻 soy Ezequiel</h1>
      <p>
        Soy programador fullstack orientado al desarrollo de aplicaciones web
        utilizando React y Next.js.
      </p>
      <p>
        Acá vas a poder ver algunos de los proyectos en los que trabajé para
        aprender y practicar JS, Typescript, React, Nextjs, CSS y varios de sus
        frameworks como Material UI, Bootstrap y Tailwind entre otros.
      </p>
      <Skills />
      <p className="my-10">
        En la sección recursos comparto varias capacitaciones y cursos gratuitos
        que me sirvieron a lo largo de mi trayecto, y tal vez puedan también
        servirte a vos 🙂
      </p>
    </section>
  );
}

export default HomePage;

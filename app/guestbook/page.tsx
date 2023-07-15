import { Gh4Icon, GoogleIcon } from "../components/Icons";

function ProjectsPage() {
  return (
    <section className="p-3 max-w-2xl mx-auto">
      <h1 className="text-2xl p-3 mt-5 text-neutral-100">deja tu comentario</h1>
      <div
        aria-label="login buttons"
        className="flex gap-3 items-center px-3 py-1"
      >
        Ingresa con
        <button className="group flex gap-2 border rounded-sm py-1 px-2 items-center border-neutral-700 hover:border-transparent bg-neutral-700 bg-opacity-60 text-neutral-200 hover:translate-x-[3px] hover:-translate-y-[3px] hover:shadow-3dneutral transition-all duration-75">
          <Gh4Icon />
          Github
        </button>
        o
        <button className="group flex gap-2 border rounded-sm py-1 px-2 items-center border-neutral-700 hover:border-transparent bg-neutral-700 bg-opacity-60 text-neutral-200 hover:translate-x-[3px] hover:-translate-y-[3px] hover:shadow-3dred transition-all duration-75">
          <GoogleIcon />
          Google
        </button>
      </div>
      <p className="text-xs mx-3 my-1 text-neutral-400">
        {"(tus datos están protegidos por Google Firebase)"}
      </p>
      <div aria-label="loged-in" className="p-3">
        <input type="text" placeholder=" tu mensaje" />
        <button className="border border-neutral-700 bg-neutral-700 bg-opacity-60 text-neutral-200 px-2 ml-1 rounded-sm hover:brightness-125 transition">
          enviar
        </button>
        <div aria-label="logout">
          <button className="text-violet-500 font-bold">salir</button>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;

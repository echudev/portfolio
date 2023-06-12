import Image from "next/image";

const Projects = () => {
  return (
    <div className="max-w-[1000px] w-full min-h-[200px] z-50 pointer-events-none font-mono rounded-2xl text-white backdrop-blur-sm p-4 shadow-2xl">
      <Image src="" alt="project-icon" />
      <div className="flex flex-col flex-wrap gap-5">
        <p className="text-[#a6b3b8] max-w-[500px] mx-auto">
          Acá te muestro algunos de mis proyectos más destacados y las
          tecnologías específicas que utilicé en cada uno de ellos
        </p>
        <div className="pointer-events-auto flex justify-center self-center gap-10 mt-5 mx-auto">
          <div>
            <button className="px-4 z-50 py-2 text-orange-100 bg-orange-600 rounded-lg duration-150 hover:bg-orange-400 active:shadow-lg">
              Ver Proyectos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

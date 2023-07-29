import GetProjects from "@/lib/getProjects";
import Card from "./Card";

async function ProjectsPage() {
  const { projectsCollection } = await GetProjects();

  return (
    <section className="p-3 max-w-2xl mx-auto">
      <h3 className="text-2xl px-4 pt-3 my-5 text-neutral-100">
        visita mis proyectos
      </h3>
      <article className="flex flex-wrap justify-center">
        {projectsCollection.map((project) => (
          <Card key={project.id} data={project} />
        ))}
      </article>
    </section>
  );
}

export default ProjectsPage;

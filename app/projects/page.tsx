import GetDouments from "../../firebase/getData";
import Card from "@/app/components/Card";

async function ProjectsPage() {
  const { projectsCollection } = await GetDouments();

  return (
    <section className="p-3 max-w-2xl mx-auto">
      <article className="flex flex-wrap justify-center">
        {projectsCollection.map((project) => (
          <Card key={project.id} data={project} />
        ))}
      </article>
    </section>
  );
}

export default ProjectsPage;

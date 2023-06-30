import GetDouments from "../../firebase/getData";
import Card from "@/components/Card";

async function ProjectsPage() {
  const { projectsCollection } = await GetDouments();

  return (
    <section>
      <div className="flex flex-wrap justify-center">
        {projectsCollection.map((project) => (
          <Card key={project.id} data={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;

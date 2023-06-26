import GetDouments from "../../firebase/getData";
import Card from "@/components/Card";

async function ProjectsPage() {
  const { projectsCollection } = await GetDouments();

  return (
    <main className="flex flex-wrap justify-center max-w-6xl transition-all">
      {projectsCollection ? (
        projectsCollection.map((project) => (
          <Card key={project.id} data={project} />
        ))
      ) : (
        <div>Cargando</div>
      )}
    </main>
  );
}

export default ProjectsPage;

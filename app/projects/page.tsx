import GetDouments from "../../firebase/getData";
import Card from "@/components/Card";

async function ProjectsPage() {
  const { projectsCollection } = await GetDouments();

  return (
    <section className="max-w-6xl h-full overflow-y-auto lg:mt-5">
      <div
        aria-label="projects container"
        className="flex flex-wrap justify-center"
      >
        {projectsCollection ? (
          projectsCollection.map((project) => (
            <Card key={project.id} data={project} />
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    </section>
  );
}

export default ProjectsPage;

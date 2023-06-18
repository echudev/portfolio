import GetDouments from "../../firebase/getData";

async function ProjectsPage() {
  const { projectsCollection } = await GetDouments();

  return (
    <div>
      <p>mira mis proyectos</p>
      {projectsCollection ? (
        projectsCollection.map((project) => (
          <div key={project.id}>
            <p>{project.name}</p>
            <p>{project.short_desc}</p>
            {project.skills.map((skill, i) => (
              <p key={i}>{skill}</p>
            ))}
          </div>
        ))
      ) : (
        <p>nada hay</p>
      )}
    </div>
  );
}

export default ProjectsPage;

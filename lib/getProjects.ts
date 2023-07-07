import data from './projects.json'

export interface Tag {
    name: string,
    img: string,
}
export interface ProjectData {
    id: string,
    name: string,
    description: string,
    cover: string,
    blurDataURL:string,
    video: string,
    tags: Tag[],
    link: {
        app: string, 
        repo: string
    },
}

export default async function GetProjects() {
    const projectsCollection: ProjectData[] = []

    data?.forEach((doc: ProjectData ) => {
        const newProject: ProjectData = {
            ...doc
        };
        projectsCollection.push(newProject);
    });

    return { projectsCollection };
}

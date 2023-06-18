import { db } from "./config";
import { collection, getDocs, QueryDocumentSnapshot  } from "firebase/firestore/lite";
 
interface ProjectData {
    id: string,
    name: string,
    tags: string[],
    img: string[],
    gif: string,
    short_desc: string,
    long_desc: string,
    skills: string[]
}

export default async function GetDouments() {
    let proyectsCollectionRef = collection(db, '/proyectos/');

    let result: any | null = null;
    let error: any = null;
    const projectsCollection: ProjectData[] = []

    try {
        result = await getDocs(proyectsCollectionRef);
    } catch (e) {
        error = e;
    }

    result?.forEach((doc: QueryDocumentSnapshot<ProjectData> ) => {
        const { id, ...data } = doc.data();
        const newProject: ProjectData = {
            id: doc.id,
            ...data
        };
        projectsCollection.push(newProject);
    });


    return { projectsCollection, error };
}

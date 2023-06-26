import { db } from "./config";
import { collection, getDocs, QueryDocumentSnapshot  } from "firebase/firestore/lite";
import { ProjectData } from "@/types";

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

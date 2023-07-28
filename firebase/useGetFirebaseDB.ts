import { collection, query, onSnapshot, orderBy, DocumentData } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "./config";

export const useGetFirestoreDB = () => {
  const [comments, setComments] = useState<DocumentData[]>([]);
  const [loadingDB, setLoadingDB] = useState<boolean>(false)

  useEffect(() => {
    setLoadingDB(true)
    const collectionRef = collection(db, "comments/");
    const queryCollection = query(collectionRef, orderBy("date", "desc"));

    const unsubscribe = onSnapshot(queryCollection, (querySnapshot) => {
      const newComments: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data()
        let id = doc.id
        let newDoc = {... data, id }
        newComments.push(newDoc);
      });
      setComments(newComments);
      setLoadingDB(false)
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { comments, loadingDB, setLoadingDB };
};
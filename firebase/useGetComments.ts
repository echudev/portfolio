import { collection, query, onSnapshot, orderBy, DocumentData } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "./config";

export const useGetComments = () => {
  const [comments, setComments] = useState<DocumentData[]>([]);


  useEffect(() => {
  const collectionRef = query(collection(db, "comments/"), orderBy("date", "desc"));

    const unsubscribe = onSnapshot(collectionRef, snap => {
      const newComments: DocumentData[] = [];

      snap.forEach((doc) => {
          let data = doc.data()
          let id = doc.id
          let newDoc = {... data, id }
          newComments.push(newDoc);
      });

      setComments(newComments);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { comments };
};
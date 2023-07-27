import { collection, query, onSnapshot, orderBy, DocumentData } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "./config";

export const useGetFirestoreDB = () => {
  const [comments, setComments] = useState<DocumentData[]>([]);

  useEffect(() => {
    const collectionRef = collection(db, "comments/");
    const queryCollection = query(collectionRef, orderBy("date", "desc"));

    const unsubscribe = onSnapshot(queryCollection, (querySnapshot) => {
      const newComments: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        newComments.push(doc.data());
      });
      setComments(newComments);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { comments };
};
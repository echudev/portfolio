import { collection, query, onSnapshot, orderBy, DocumentData } from "firebase/firestore";
import { useState, useEffect, useMemo } from "react";
import { db } from "./config";

export const useGetFirestoreDB = () => {
  const [comments, setComments] = useState<DocumentData[]>([]);
  const [loadingDB, setLoadingDB] = useState<boolean>(true)

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
      setLoadingDB(false)
    });

  useEffect(() => {
    unsubscribe
    return () => {
      unsubscribe();
    };
  }, [unsubscribe]);

  return { comments, loadingDB, setLoadingDB };
};
import { collection, getDocs, query, orderBy, DocumentData } from "firebase/firestore/lite";
import { useState, useEffect } from "react";
import { db } from "./config";

export const useGetFirestoreDB = () => {
  const [comments, setComments] = useState<DocumentData[]>([]);

  const getComments = async () => {
    const collectionRef = collection(db, "comments/");
    const collectionQuery = query(collectionRef, orderBy("date", "desc"));

    const queryResult = await getDocs(collectionQuery);

    queryResult.forEach((doc) => {
      setComments((prevComments) => [...prevComments, doc.data()]);
    });
  };

  useEffect(() => {
    getComments();
    return () => {
      getComments();
    }
  }, []);

  return { comments };
};
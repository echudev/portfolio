import { useState, useEffect } from "react";
import { FirebaseAuth } from "../config";
import { User as FirebaseUser } from "firebase/auth";

export const useGetUser = () => {
  const [user, setUser] = useState<FirebaseUser | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const unsuscribe = FirebaseAuth.onAuthStateChanged(async (firebaseUser) => {
      try {
        firebaseUser ? setUser(firebaseUser) : setUser(undefined);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    });

    return () => unsuscribe();
  }, []);

  return { user, loading, setLoading };
};

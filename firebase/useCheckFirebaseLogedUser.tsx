import { useState, useEffect } from "react";
import { FirebaseAuth } from "./config";

export const useCheckFirebaseLogedUser = () => {
  const [user, setUser] = useState<Object | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const suscribe = FirebaseAuth.onAuthStateChanged(async (firebaseUser) => {
      try {
        firebaseUser ? setUser(firebaseUser.providerData) : setUser(undefined);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    });

    return () => suscribe();
  }, []);

  return { user, loading };
};

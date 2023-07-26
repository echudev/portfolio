"use client";
import { useRef } from "react";
import clsx from "clsx";
import { signInWithGoogle, logoutFirebase } from "../../firebase/providers";
import { useGetFirebaseLogedUser } from "@/firebase/useGetFirebaseLogedUser";
import { doc, setDoc, collection } from "firebase/firestore/lite";
import { db } from "@/firebase/config";
import Loader from "../components/Loader";
import {
  GithubLoginBtn,
  GoogleLoginBtn,
  ComentBtn,
  LogoutBtn,
} from "./buttons";

function FormComponent() {
  const { user, loading, setLoading } = useGetFirebaseLogedUser();
  const userInput = useRef<HTMLInputElement>(null);

  const startGoogleSignIn = async () => {
    setLoading(true);
    await signInWithGoogle();
    setLoading(false);
  };

  const setMessageFirestore = async () => {
    setLoading(true);
    // create messaje obj
    if (user && userInput.current) {
      const newMessage = {
        uid: user.uid,
        name: user.displayName,
        date: new Date().getTime(),
        comment_text: userInput.current.value,
        parent_comment_id: "",
      };
      // send doc to Firestore db
      const newDoc = doc(collection(db, `comments/`));
      await setDoc(newDoc, newMessage);
      // reset input
      if (userInput.current) {
        userInput.current.value = "";
      }
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[100px]">
      {!user ? (
        <div className={clsx("", { hidden: loading })}>
          <div
            aria-label="login buttons"
            className="flex gap-3 items-center px-3 py-1"
          >
            Ingresa con
            <GithubLoginBtn />
            o
            <GoogleLoginBtn onClick={startGoogleSignIn} />
          </div>
          <p className="text-xs mx-3 my-1 text-neutral-400">
            * tus datos están protegidos por Google Firebase
          </p>
        </div>
      ) : (
        <div className="p-3">
          <h3 className="mb-2">hola {user.displayName} 🙂</h3>
          <div className="flex bg-neutral-200 rounded">
            <input
              className="rounded text-black px-1 w-full focus:outline-0 bg-transparent"
              ref={userInput}
              name="userMessage"
              type="text"
              placeholder=" escribe tu mensaje ..."
            />
            <ComentBtn onClick={setMessageFirestore} />
          </div>
          <div aria-label="bottons" className="flex mt-2 gap-2">
            <LogoutBtn onClick={logoutFirebase} />
          </div>
        </div>
      )}
      <Loader hide={loading} />
    </div>
  );
}

export default FormComponent;

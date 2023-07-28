"use client";
import { useRef, useState } from "react";
import clsx from "clsx";
import { signInWithGoogle, logoutFirebase } from "../../firebase/providers";
import { doc, setDoc, collection } from "firebase/firestore";
import { useGetFirebaseAuth } from "@/firebase/useGetFirebaseAuth";
import { db } from "@/firebase/config";
import Loader from "../components/Loader";
import {
  GithubLoginBtn,
  GoogleLoginBtn,
  ComentBtn,
  LogoutBtn,
} from "./buttons";

function Form() {
  const { user, loading, setLoading } = useGetFirebaseAuth();
  const [hideAlert, setHideAlert] = useState<boolean>(true);
  const userInput = useRef<HTMLInputElement>(null);
  const inputBox = useRef<HTMLDivElement>(null);

  const startGoogleSignIn = async () => {
    setLoading(true);
    await signInWithGoogle();
    setLoading(false);
  };

  const setMessageFirestore = async () => {
    setLoading(true);
    // create messaje obj
    if (user && userInput.current) {
      // check that the message is not empty
      if (userInput.current.value.length === 0) {
        setHideAlert(false);
        if (inputBox.current) {
          inputBox.current.style.outlineColor = "red";
        }
        setLoading(false);
        return;
      }
      // create new message object
      const newMessage = {
        uid: user.uid,
        name: user.displayName,
        date: new Date().getTime(),
        comment_text: userInput.current.value,
        parent_comment_id: "",
      };
      // set the new message on firestore DB
      const newDoc = doc(collection(db, `comments/`));
      await setDoc(newDoc, newMessage);
      // reset input
      if (userInput.current) {
        userInput.current.value = "";
      }
      setLoading(false);
    }
  };

  const handleFocus = () => {
    if (inputBox.current) {
      setHideAlert(true);
      inputBox.current.style.outlineColor = "#8d5efa";
    }
  };
  const handleBlur = () => {
    if (inputBox.current) {
      setHideAlert(true);
      inputBox.current.style.outlineColor = "";
    }
  };

  return (
    <div className="min-h-[100px]">
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
          <h3 className="mb-2 text-neutral-300">hola {user.displayName} 🙂</h3>
          <div
            ref={inputBox}
            className="flex bg-neutral-200 outline outline-transparent rounded"
          >
            <input
              className="rounded text-black px-1 w-full focus:outline-0 bg-transparent"
              ref={userInput}
              name="userMessage"
              type="text"
              placeholder=" escribe tu mensaje ..."
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <ComentBtn onClick={setMessageFirestore} loading={loading} />
          </div>
          <div className="flex mt-2">
            <LogoutBtn onClick={logoutFirebase} />
            <p
              className={clsx("w-full text-center text-red-600 -mt-2", {
                hidden: hideAlert,
              })}
            >
              el campo no puede estar vacío!
            </p>
          </div>
        </div>
      )}
      <Loader hide={loading} />
    </div>
  );
}

export default Form;

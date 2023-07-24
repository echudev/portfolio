"use client";
import { useEffect, useRef } from "react";
import { signInWithGoogle, logoutFirebase } from "../../firebase/providers";
import { useCheckFirebaseLogedUser } from "@/firebase/useCheckFirebaseLogedUser";
import {
  GithubLoginBtn,
  GoogleLoginBtn,
  ComentBtn,
  LogoutBtn,
} from "./buttons";

function FormComponent() {
  const userInput = useRef<HTMLInputElement>(null);
  const { user, loading } = useCheckFirebaseLogedUser();

  const handleSendInput = () => {
    let input = userInput.current;
  };
  const startGoogleSignIn = async () => {
    await signInWithGoogle();
  };

  return (
    <div>
      {loading && <div>loading</div>}
      {!user ? (
        <>
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
        </>
      ) : (
        <div className="p-3">
          <div className="flex bg-neutral-200 rounded">
            <input
              className="rounded text-black px-1 w-full focus:outline-0 bg-transparent"
              ref={userInput}
              name="userMessage"
              type="text"
              placeholder=" hola mundo..."
            />
            <ComentBtn onClick={handleSendInput} />
          </div>
          <div aria-label="bottons" className="flex mt-2 gap-2">
            <LogoutBtn onClick={logoutFirebase} />
          </div>
        </div>
      )}
    </div>
  );
}

export default FormComponent;

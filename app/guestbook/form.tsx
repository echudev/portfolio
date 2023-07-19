"use client";
import { FirebaseAuth } from "@/firebase/config";
import { useState, useEffect, useRef } from "react";
import { GithubLoginBtn, GoogleLoginBtn } from "./buttons";
import { logoutFirebase } from "@/firebase/providers";

function FormComponent() {
  const [user, setUser] = useState<Object | undefined>(undefined);
  const userInput = useRef<HTMLInputElement>(null);

  const handleSendInput = () => {
    let input = userInput.current;
    console.log(input?.value);
  };
  const handleClearInput = () => {
    if (userInput.current) {
      userInput.current.value = "";
    }
  };

  useEffect(() => {
    FirebaseAuth.onAuthStateChanged(async (user) => {
      user ? setUser(user.providerData) : setUser(undefined);
    });
  }, []);

  return (
    <div>
      {user ? (
        <div className="p-3">
          <input
            className="rounded text-black px-1 w-full"
            ref={userInput}
            name="userMessage"
            type="text"
            placeholder=" tu mensaje..."
          />
          <div aria-label="bottons" className="flex mt-2 gap-2">
            <button
              onClick={handleSendInput}
              className="text-center px-3 border border-violet-600 bg-violet-700 rounded hover:bg-violet-500 transition-all"
            >
              comentar
            </button>
            <button
              onClick={handleClearInput}
              className="text-center px-3 rounded border border-neutral-400 text-neutral-300 hover:text-violet-500 hover:border-violet-500 transition-all"
            >
              borrar
            </button>
            <button
              onClick={logoutFirebase}
              className="text-center px-3 text-neutral-300 hover:text-red-500 transition-all"
            >
              salir
            </button>
          </div>
        </div>
      ) : (
        <>
          <div
            aria-label="login buttons"
            className="flex gap-3 items-center px-3 py-1"
          >
            Ingresa con
            <GithubLoginBtn />
            o
            <GoogleLoginBtn />
          </div>
          <p className="text-xs mx-3 my-1 text-neutral-400">
            * tus datos están protegidos por Google Firebase
          </p>
        </>
      )}
    </div>
  );
}

export default FormComponent;

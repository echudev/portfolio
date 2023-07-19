"use client";
import { FirebaseAuth } from "@/firebase/config";
import { useState, useEffect } from "react";
import { GithubLoginBtn, GoogleLoginBtn, LogoutFirebaseBtn } from "./buttons";

function FormComponent() {
  const [user, setUser] = useState<Object | undefined>(undefined);

  useEffect(() => {
    FirebaseAuth.onAuthStateChanged(async (user) => {
      user ? setUser(user.providerData) : setUser(undefined);
    });
  }, []);

  return (
    <div>
      {user ? (
        <div className="p-3">
          <input name="userMessage" type="text" placeholder=" tu mensaje" />
          <button className="m-1 border rounded-sm px-2 border-neutral-700 hover:border-transparent bg-neutral-700 bg-opacity-60 text-neutral-200 hover:translate-x-[3px] hover:-translate-y-[3px] hover:shadow-3dneutral hover:text-white transition-all duration-75">
            Enviar
          </button>
          <div aria-label="logout">
            <LogoutFirebaseBtn />
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

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
          <input name="userMessage" type="text" placeholder=" tu mensaje..." />
          <button className="text-center px-3 m-1 bg-violet-700 rounded shadow shadow-violet-900 hover:bg-violet-500 transition-all">
            enviar
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

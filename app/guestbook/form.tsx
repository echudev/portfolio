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
          <button className="border border-neutral-700 bg-neutral-700 bg-opacity-60 text-neutral-200 px-2 ml-1 rounded-sm hover:brightness-125 transition">
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

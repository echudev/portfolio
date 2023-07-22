"use client";
import { FirebaseAuth } from "@/firebase/config";
import { useState, useEffect, useRef } from "react";
import {
  GithubLoginBtn,
  GoogleLoginBtn,
  ComentBtn,
  ClearBtn,
  LogoutBtn,
} from "./buttons";

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
    FirebaseAuth.onAuthStateChanged(async (firebaseUser) => {
      try {
        if (firebaseUser) {
          setUser(firebaseUser.providerData);
        } else {
        }
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  return (
    <div>
      {!user ? (
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
      ) : (
        <div className="p-3">
          <input
            className="rounded text-black px-1 w-full"
            ref={userInput}
            name="userMessage"
            type="text"
            placeholder=" tu mensaje..."
          />
          <div aria-label="bottons" className="flex mt-2 gap-2">
            <ComentBtn onClick={handleSendInput} />
            <ClearBtn onClick={handleClearInput} />
            <LogoutBtn />
          </div>
        </div>
      )}
    </div>
  );
}

export default FormComponent;

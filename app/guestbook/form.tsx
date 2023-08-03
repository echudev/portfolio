"use client";
import { useRef, useState } from "react";
import { logoutFirebase } from "../../firebase/auth/providers";
import { setComment } from "@/firebase/setComment";
import { User as FirebaseUser } from "firebase/auth";

interface FormPorps {
  user: FirebaseUser | undefined;
}

function Form({ user }: FormPorps) {
  const [userInput, setUserInput] = useState<string>("");
  const inputBox = useRef<HTMLDivElement>(null);

  const startSetComment = async () => {
    await setComment({ user, userInput });
    setUserInput("");
  };

  return (
    <div className="relative min-h-[100px]">
      <div className="p-3">
        <h3 className="mb-2 text-neutral-300">hola {user?.displayName} 🙂</h3>
        <div
          ref={inputBox}
          className="flex bg-neutral-200 outline outline-transparent focus-within:outline-violet-700 rounded"
        >
          <input
            className="rounded text-black px-1 w-full outline-0 bg-transparent"
            name="userMessage"
            type="text"
            placeholder=" escribe tu mensaje ..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            onClick={startSetComment}
            disabled={userInput.trim() === ""}
            className="bg-violet-700 hover:bg-violet-500 disabled:bg-neutral-600 rounded m-[2px] py-1 px-2 text-neutral-200 transition-all"
          >
            comentar
          </button>
        </div>
        <div className="flex mt-2">
          <button
            onClick={logoutFirebase}
            className="text-center text-neutral-300 mx-1 font-bold hover:text-red-400 transition-all"
          >
            salir
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;

import { Gh4Icon, GoogleIcon } from "../components/Icons";
import Loader from "./Loader";
import clsx from "clsx";
import {
  signInWithGithub,
  signInWithGoogle,
} from "../../firebase/auth/providers";
import { useState } from "react";

export const Login = () => {
  const [loading, setLoading] = useState(false);

  const startGoogleSignIn = async () => {
    setLoading(true);
    await signInWithGoogle();
    setLoading(false);
  };

  const startGithubSignIn = async () => {
    setLoading(true);
    await signInWithGithub();
    setLoading(false);
  };

  return (
    <article className="relative min-h-[70px]">
      <div className={clsx("", { hidden: loading })}>
        <div
          aria-label="login buttons"
          className="flex gap-3 items-center px-3 py-1"
        >
          Ingresa con
          <button
            onClick={startGithubSignIn}
            className="group flex gap-2 border rounded-sm py-1 px-2 items-center border-neutral-700 hover:border-neutral-400 bg-neutral-700 bg-opacity-60 text-neutral-200 hover:bg-neutral-800 active:scale-95 transition-all"
          >
            <Gh4Icon />
            Github
          </button>
          o
          <button
            onClick={startGoogleSignIn}
            className="group flex gap-2 border rounded-sm py-1 px-2 items-center border-neutral-700 hover:border-b-green-400 hover:border-l-yellow-500 hover:border-r-blue-500 hover:border-t-red-600 bg-neutral-700 bg-opacity-60 text-neutral-200 hover:bg-neutral-800 active:scale-95 transition-all"
          >
            <GoogleIcon />
            Google
          </button>
        </div>
        <p className="text-xs mx-3 my-1 text-neutral-400">
          * tus datos están protegidos por Google Firebase
        </p>
      </div>
      <Loader hide={loading} />
    </article>
  );
};

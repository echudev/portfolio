import { Gh4Icon, GoogleIcon } from "../components/Icons";
import { signInWithGoogle, logoutFirebase } from "../../firebase/providers";

interface BtnProps {
  onClick: () => void;
}

export function GoogleLoginBtn() {
  const startGoogleSignIn = async () => {
    await signInWithGoogle();
  };

  return (
    <button
      onClick={startGoogleSignIn}
      className="group flex gap-2 border rounded-sm py-1 px-2 items-center border-neutral-700 hover:border-b-green-400 hover:border-l-yellow-500 hover:border-r-blue-500 hover:border-t-red-600 bg-neutral-700 bg-opacity-60 text-neutral-200 hover:bg-neutral-800 active:scale-95 transition-all"
    >
      <GoogleIcon />
      Google
    </button>
  );
}

export function GithubLoginBtn() {
  return (
    <button className="group flex gap-2 border rounded-sm py-1 px-2 items-center border-neutral-700 hover:border-neutral-400 bg-neutral-700 bg-opacity-60 text-neutral-200 hover:bg-neutral-800 active:scale-95 transition-all">
      <Gh4Icon />
      Github
    </button>
  );
}

export function ComentBtn({ onClick }: BtnProps) {
  return (
    <button
      onClick={onClick}
      className="text-center px-3 border border-violet-600 bg-violet-700 rounded hover:bg-violet-500 transition-all"
    >
      comentar
    </button>
  );
}

export function ClearBtn({ onClick }: BtnProps) {
  return (
    <button
      onClick={onClick}
      className="text-center px-3 rounded border border-neutral-400 text-neutral-300 hover:text-violet-500 hover:border-violet-500 transition-all"
    >
      borrar
    </button>
  );
}

export function LogoutBtn() {
  return (
    <button
      onClick={logoutFirebase}
      className="text-center px-3 text-neutral-300 hover:text-red-500 transition-all"
    >
      salir
    </button>
  );
}

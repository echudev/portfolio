import { Gh4Icon, GoogleIcon } from "../components/Icons";
import { signInWithGoogle, logoutFirebase } from "../../firebase/providers";

export function GoogleLoginBtn() {
  const startGoogleSignIn = async () => {
    await signInWithGoogle();
  };

  return (
    <button
      onClick={startGoogleSignIn}
      className="group flex gap-2 border rounded-sm py-1 px-2 items-center border-neutral-700 hover:border-transparent bg-neutral-700 bg-opacity-60 text-neutral-200 hover:translate-x-[3px] hover:-translate-y-[3px] hover:shadow-3dred transition-all duration-75"
    >
      <GoogleIcon />
      Google
    </button>
  );
}

export function GithubLoginBtn() {
  return (
    <button className="group flex gap-2 border rounded-sm py-1 px-2 items-center border-neutral-700 hover:border-transparent bg-neutral-700 bg-opacity-60 text-neutral-200 hover:translate-x-[3px] hover:-translate-y-[3px] hover:shadow-3dneutral transition-all duration-75">
      <Gh4Icon />
      Github
    </button>
  );
}

export function LogoutFirebaseBtn() {
  return (
    <button
      onClick={logoutFirebase}
      className="group my-1 flex gap-2 border rounded-sm py-1 px-2 items-center border-neutral-700 hover:border-transparent bg-neutral-700 bg-opacity-60 text-neutral-200 hover:translate-x-[3px] hover:-translate-y-[3px] hover:shadow-3dneutral hover:text-white transition-all duration-75"
    >
      Salir
    </button>
  );
}

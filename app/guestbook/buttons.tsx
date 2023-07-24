import { Gh4Icon, GoogleIcon } from "../components/Icons";

interface BtnProps {
  onClick: () => void;
}

export function GoogleLoginBtn({ onClick }: BtnProps) {
  return (
    <button
      onClick={onClick}
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
      className="bg-neutral-700 rounded m-[2px] p-1 text-white hover:bg-neutral-800 transition-all"
    >
      comentar
    </button>
  );
}

export function LogoutBtn({ onClick }: BtnProps) {
  return (
    <button
      onClick={onClick}
      className="text-center text-neutral-200 m-1 font-bold hover:text-red-400 transition-all"
    >
      salir
    </button>
  );
}

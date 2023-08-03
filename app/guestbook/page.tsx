"use client";
import { useGetUser } from "@/firebase/auth/useGetUser";
import Comments from "./comments";
import Form from "./form";
import { Login } from "./login";

function GuestbookPage() {
  const { user } = useGetUser();

  return (
    <section className="p-3 max-w-2xl mx-auto">
      <h1 className="text-2xl p-3 mt-5 text-neutral-100">deja tu comentario</h1>
      {!user ? <Login /> : <Form user={user} />}
      <Comments user={user} />
    </section>
  );
}

export default GuestbookPage;

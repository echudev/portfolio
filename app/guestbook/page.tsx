"use client";
import { useGetFirebaseAuth } from "@/firebase/auth/useGetUser";
import { useGetFirestoreDB } from "@/firebase/useGetComments";
import Comments from "./comments";
import Form from "./form";

function GuestbookPage() {
  const { user, loading, setLoading } = useGetFirebaseAuth();
  const { comments, loadingDB } = useGetFirestoreDB();

  return (
    <section className="p-3 max-w-2xl mx-auto">
      <h1 className="text-2xl p-3 mt-5 text-neutral-100">deja tu comentario</h1>
      <Form user={user} loading={loading} setLoading={setLoading} />
      <Comments user={user} comments={comments} loadingDB={loadingDB} />
    </section>
  );
}

export default GuestbookPage;

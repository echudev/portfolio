"use client";
import { useGetFirestoreDB } from "@/firebase/useGetFirebaseDB";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import Loader from "../components/Loader";
import { User as FirebaseUser } from "firebase/auth";
import clsx from "clsx";

function Comments({ user }: { user: FirebaseUser | undefined }) {
  const { comments, loadingDB } = useGetFirestoreDB();

  const deleteDocFirestore = async (docId: any) => {
    if (user) {
      try {
        const docRef = doc(db, "comments", docId);
        await deleteDoc(docRef);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <article className="relative p-3 max-w-2xl mx-auto">
      <ul>
        {comments &&
          comments.map((obj, i) => (
            <li key={i} className="flex gap-3 my-3">
              <h3 className="text-neutral-400">{obj.name}</h3>
              <p className="text-neutral-200">{obj.comment_text}</p>
              <div
                onClick={() => deleteDocFirestore(obj.id)}
                className={clsx(
                  "ml-auto cursor-pointer text-neutral-400 select-none",
                  {
                    hidden: user?.uid !== obj.uid,
                  }
                )}
              >
                x
              </div>
            </li>
          ))}
      </ul>
      <Loader hide={loadingDB} />
    </article>
  );
}

export default Comments;

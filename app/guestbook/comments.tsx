"use client";
import { doc, deleteDoc, DocumentData } from "firebase/firestore";
import { User as FirebaseUser } from "firebase/auth";
import { db } from "@/firebase/config";
import Loader from "../components/Loader";
import clsx from "clsx";

interface CommentsProps {
  user: FirebaseUser | undefined;
  comments: DocumentData[];
  loadingDB: boolean;
}

function Comments({ user, comments, loadingDB }: CommentsProps) {
  const deleteDocFirestore = async (docId: string) => {
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
          comments.map((doc, i) => (
            <li key={i} className="flex gap-3 my-3">
              <h3 className="text-neutral-400">{doc.name}</h3>
              <p className="text-neutral-200">{doc.comment_text}</p>
              <div
                onClick={() => deleteDocFirestore(doc.id)}
                className={clsx(
                  "ml-auto cursor-pointer text-neutral-400 select-none",
                  {
                    hidden: user?.uid !== doc.uid,
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

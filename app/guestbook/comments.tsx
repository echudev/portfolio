import { useGetComments } from "@/firebase/useGetComments";
import { User as FirebaseUser } from "firebase/auth";
import Loader, { Widths } from "./Loader";
import CommentMenu from "./commentMenu";
import { useEffect } from "react";

interface CommentsProps {
  user: FirebaseUser | undefined;
}

function Comments({ user }: CommentsProps) {
  const { comments } = useGetComments();

  return (
    <article className="relative p-3 max-w-2xl mx-auto z-40">
      {comments.length > 0 ? (
        <ul>
          {comments.map((doc, i) => {
            return (
              <li key={i} className="flex gap-3 my-3 py-1">
                <h3 className="text-neutral-400">{doc.name}:</h3>
                <p className="text-neutral-200">{doc.comment_text}</p>
                <CommentMenu user={user} docu={doc} />
              </li>
            );
          })}
        </ul>
      ) : (
        <Loader width={Widths.medium} />
      )}
    </article>
  );
}

export default Comments;

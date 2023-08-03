import { useGetComments } from "@/firebase/useGetComments";
import { User as FirebaseUser } from "firebase/auth";
import Loader from "./Loader";
import CommentMenu from "./commentMenu";

interface CommentsProps {
  user: FirebaseUser | undefined;
}

function Comments({ user }: CommentsProps) {
  const { comments, loadingDB } = useGetComments();

  return (
    <article className="relative p-3 max-w-2xl mx-auto z-40">
      <ul>
        {comments &&
          comments.map((doc, i) => (
            <li key={i} className="flex gap-3 my-3 py-1">
              <h3 className="text-neutral-400">{doc.name}:</h3>
              <p className="text-neutral-200">{doc.comment_text}</p>
              <CommentMenu user={user} docu={doc} />
            </li>
          ))}
      </ul>
      <Loader hide={loadingDB} />
    </article>
  );
}

export default Comments;

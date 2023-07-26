import { useGetFirestoreDB } from "@/firebase/useGetFirebaseDB";

function Comments() {
  const { comments } = useGetFirestoreDB();

  return (
    <article className="p-3 max-w-2xl mx-auto">
      <ul>
        {" "}
        {comments &&
          comments.map((obj, i) => (
            <li key={i} className="flex gap-3 my-3">
              <h3 className="text-neutral-400">{obj.name}</h3>
              <p className="text-neutral-200">{obj.comment_text}</p>
            </li>
          ))}
      </ul>
    </article>
  );
}

export default Comments;

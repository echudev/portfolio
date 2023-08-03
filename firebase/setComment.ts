import { doc, setDoc, collection } from "firebase/firestore";
import { User as FirebaseUser } from "firebase/auth";
import { db } from "./config";

interface setCommentProps {
    user: FirebaseUser | undefined;
    userInput: string;
  }

export const setComment = async ({
    user, 
    userInput, 
    } :setCommentProps) => {
    
    if (user && userInput) {
      // 1 - create new message object
      const newMessage = {
        uid: user.uid,
        name: user.displayName,
        date: new Date().getTime(),
        comment_text: userInput,
        parent_comment_id: "",
      };
      // 2 - set the new message on firestore DB
      const newDoc = doc(collection(db, `comments/`));
      await setDoc(newDoc, newMessage);
    }
  };
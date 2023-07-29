"use client";
import clsx from "clsx";
import { useState } from "react";
import { doc, deleteDoc, DocumentData } from "firebase/firestore";
import { User as FirebaseUser } from "firebase/auth";
import { db } from "@/firebase/config";
import { DotsIcon } from "../components/Icons";

interface DotsMenuProps {
  user: FirebaseUser | undefined;
  docu: DocumentData;
}

function Menu({ user, docu }: DotsMenuProps) {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [docId, setDocId] = useState<string>("");
  const deleteDocFirestore = async () => {
    if (user) {
      try {
        const docRef = doc(db, "comments", docId);
        await deleteDoc(docRef);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleMouseEnter = (id: string) => {
    setOpenPopup(true);
    setDocId(id);
  };

  const handleMouseLeave = () => {
    setOpenPopup(false);
    setDocId("");
  };

  return (
    <div
      className={clsx("relative flex ml-auto text-neutral-400 cursor-pointer", {
        hidden: user?.uid !== docu.uid,
      })}
    >
      <div
        onMouseEnter={() => handleMouseEnter(docu.id)}
        onMouseLeave={() => handleMouseLeave()}
        className={clsx("absolute right-0 z-30", {
          hidden: !(openPopup && docu.id === docId),
        })}
      >
        <span
          onClick={deleteDocFirestore}
          className="mr-8 my-auto border border-neutral-700 bg-neutral-800 hover:bg-neutral-600 rounded py-1 px-3 text-sm leading-4 text-neutral-100 whitespace-nowrap cursor-pointer transition-all"
        >
          eliminar mensaje
        </span>
      </div>
      <div
        className="bg-neutral-700/20 border border-neutral-700/30 rounded-full w-fit h-fit cursor-pointer"
        onMouseEnter={() => handleMouseEnter(docu.id)}
        onMouseLeave={() => handleMouseLeave()}
      >
        <DotsIcon />
      </div>
    </div>
  );
}

export default Menu;

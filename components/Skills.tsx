import Image from "next/image";
import html from "../public/icons/html.png";
import css from "../public/icons/css.png";
import js from "../public/icons/js.png";
import ts from "../public/icons/ts.png";
import react from "../public/icons/react.png";
import next from "../public/icons/nextjs.png";
import tailwind from "../public/icons/tailwind.png";
import firebase from "../public/icons/firebase.png";
import git from "../public/icons/git.png";
import github from "../public/icons/github.png";

const Skills = () => {
  return (
    <article className="mt-5">
      <h2 className="text-2xl p-2 ">Skills</h2>
      <div className="flex gap-3 flex-wrap justify-center">
        <div className="flex flex-col flex-shrink-0 items-center rounded-md p-2">
          <Image alt="html" src={html} width={30} height={30} />
          <p className="text-xs mt-1">html</p>
        </div>
        <div className="flex flex-col flex-shrink-0 items-center rounded-md p-2">
          <Image alt="css" src={css} width={30} height={30} />
          <p className="text-xs mt-1">css</p>
        </div>
        <div className="flex flex-col flex-shrink-0 items-center  rounded-md p-2">
          <Image alt="js" src={js} width={30} height={30} />
          <p className="text-xs mt-1">js</p>
        </div>
        <div className="flex flex-col flex-shrink-0 items-center  rounded-md p-2">
          <Image alt="ts" src={ts} width={30} height={30} />
          <p className="text-xs mt-1">ts</p>
        </div>
        <div className="flex flex-col flex-shrink-0 items-center  rounded-md p-2">
          <Image alt="react" src={react} width={30} height={30} />
          <p className="text-xs mt-1">react</p>
        </div>
        <div className="flex flex-col flex-shrink-0 items-center  rounded-md p-2">
          <Image alt="next" src={next} width={30} height={30} />
          <p className="text-xs mt-1">next</p>
        </div>
        <div className="flex flex-col flex-shrink-0 items-center  rounded-md p-2">
          <Image alt="tailwind" src={tailwind} width={30} height={30} />
          <p className="text-xs mt-1">tailwind</p>
        </div>
        <div className="flex flex-col flex-shrink-0 items-center  rounded-md p-2">
          <Image alt="firebase" src={firebase} width={30} height={30} />
          <p className="text-xs mt-1">firebase</p>
        </div>
        <div className="flex flex-col flex-shrink-0 items-center  rounded-md p-2">
          <Image alt="git" src={git} width={30} height={30} />
          <p className="text-xs mt-1">git</p>
        </div>
        <div className="flex flex-col flex-shrink-0 items-center  rounded-md p-2">
          <Image alt="github" src={github} width={30} height={30} />
          <p className="text-xs mt-1">github</p>
        </div>
      </div>
    </article>
  );
};

export default Skills;

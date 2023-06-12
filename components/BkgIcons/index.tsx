import Image from "next/image";
import {
  style,
  style2,
  small2,
  small3,
  medium,
  medium2,
  large,
} from "../../utils/constants";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import ts from "../../assets/ts.png";
import htm from "../../assets/html.png";
import css from "../../assets/css.png";
import git from "../../assets/git.png";
import tlwnd from "../../assets/tailwind.png";
import mui from "../../assets/mui.png";
import msql from "../../assets/mysql.png";
import fbse from "../../assets/firebase.png";
import mgo from "../../assets/mongo.png";
import gh from "../../assets/gh.png";
import nde from "../../assets/node.png";

interface BkgIconsProps {
  iconTransformX: {
    slow: number;
    normal: number;
    fast: number;
  };
  iconTransformY: {
    slow: number;
    normal: number;
    fast: number;
  };
}

const BkgIcons = ({ iconTransformX, iconTransformY }: BkgIconsProps) => {
  return (
    <div className="absolute w-full h-full bg-repeat bg-overlay-pattern z-40 overflow-hidden">
      <div className="flex w-full h-full select-none">
        <Image
          alt="js"
          height={40}
          width={40}
          src={js}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[7%] left-[22%]`}
        />
        <Image
          alt="html"
          height={40}
          width={40}
          src={htm}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[33%] left-[10%]`}
        />
        <Image
          alt="git"
          height={40}
          width={40}
          src={git}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[50%] left-[95%]`}
        />
        <Image
          alt="typescript"
          height={40}
          width={40}
          src={ts}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[52%] left-[14%]`}
        />
        <Image
          alt="materialui"
          height={40}
          width={40}
          src={mui}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[68%] left-[2%]`}
        />
        <Image
          alt="react"
          height={40}
          width={40}
          src={react}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[75%] left-[80%]`}
        />
        <Image
          alt="mongoDB"
          height={40}
          width={40}
          src={mgo}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[65%] left-[35%]`}
        />
        <Image
          alt="css"
          height={40}
          width={40}
          src={css}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${large} top-[24%] left-[36%]`}
        />
        <Image
          alt="github"
          height={40}
          width={40}
          src={gh}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[16%] left-[77%]`}
        />
        <Image
          alt="firebase"
          height={40}
          width={40}
          src={fbse}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[34%] left-[82%]`}
        />
        <Image
          alt="mySQL"
          height={40}
          width={40}
          src={msql}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[17%] left-[60%]`}
        />
        <Image
          alt="nodejs"
          height={40}
          width={40}
          src={nde}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[60%] left-[58%]`}
        />
        <Image
          alt="tailwind"
          height={40}
          width={40}
          src={tlwnd}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[32%] left-[60%]`}
        />
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[80%] left-[25%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[17%] left-[18%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small2} top-[5%] left-[24%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${medium2} top-[40%] left-[75%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small2} top-[72%] left-[75%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[20%] left-[50%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[20%] left-[75%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small3} top-[45%] left-[35%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small3} top-[55%] left-[45%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small3} top-[10%] left-[70%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small3} top-[60%] left-[15%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${medium2} top-[35%] left-[26%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${medium2} top-[72%] left-[55%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[40%] left-[61%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${medium2} top-[30%] left-[40%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${medium2} top-[3%] left-[44%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[-3%] left-[64%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${medium} top-[10%] left-[97%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${medium2} top-[30%] left-[90%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${medium2} top-[80%] left-[-5%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${medium2} top-[13%] left-[3%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${medium} top-[49%] left-[5%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${medium} top-[60%] left-[95%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small2} top-[56%] left-[80%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${medium} top-[26%] left-[106%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small2} top-[40%] left-[102%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${medium2} top-[29%] left-[-5%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${medium} top-[43%] left-[-10%]`}
        ></div>
      </div>
    </div>
  );
};

export default BkgIcons;

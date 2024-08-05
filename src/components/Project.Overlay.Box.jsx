import React from "react";
import { text_md_medium } from "../styles/utils";

function ProjectOverlayBox({ image, text }) {
  return (
    <div className="relative rounded-md h-[180px] md:h-[220px] lg:h-[210px] w-[47%] md:w-[30%] lg:w-[32%] overflow-hidden transform-gpu group hover:scale-110 duration-700">
      <div className=" p-2 bg-red-70 h-[100%] w-[100%]  shadow-md">
        <img
          src={image}
          alt={text}
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-100 flex h-[100%] w-[100%] items-center justify-center bg-slate-800 opacity-90 group-hover:hidden duration-700">
        <p className={`text-center text-white px-4 mt-4 ${text_md_medium}`}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default ProjectOverlayBox;

import React from "react";
import { text_md_medium } from "../styles/utils";

function ServicesBox({ image, text }) {
  return (
    <div className="bg-[#fff] rounded-md p-2 h-[180px] md:h-[220px] lg:h-[210px] w-[47%] md:w-[29%] lg:w-[28%] shadow-md">
      <div className="w-[100%] h-[100px]  md:h-[130px] flex justify-center items-center">
        <img
          src={image}
          alt={text}
          className="w-[70%] h-[100%] object-contain"
        />
      </div>
      <p className={`text-center mt-4 ${text_md_medium}`}>{text}</p>
    </div>
  );
}

export default ServicesBox;

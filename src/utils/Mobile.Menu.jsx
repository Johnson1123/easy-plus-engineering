import React from "react";
import { menuItem } from "../helper/constant";
import { Link } from "react-router-dom";
import { text_mobile_menu } from "../styles/utils";

function MobileMenu() {
  const url = window.location.href;
  return (
    <div className="w-[100%] absolute flex flex-col gap-5 px-3 py-7 md:hidden bg-deep duration-75 items-center z-20 top-18 left-0 ">
      {menuItem.map((item, i) => {
        return (
          <Link
            to={item.href}
            key={i}
            className={`text-white border-b border-b-tertiary hover:bg-secondary w-[95%] ${
              url == item.href ? "text-white" : "text-primary"
            } ${text_mobile_menu}`}
          >
            <span>{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}

export default MobileMenu;

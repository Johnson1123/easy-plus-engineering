import React from "react";
import { menuItem } from "../helper/constant";
import { Link } from "react-router-dom";

function Menu() {
  const url = window.location.href;
  return (
    <div className="flex gap-10">
      {menuItem.map((item, i) => {
        return (
          <Link
            to={item.href}
            key={i}
            className={`text-white ${
              url == item.href
                ? "text-white"
                : "text-primary text-md font-rubik font-medium hover:text-secondary duration-700"
            }`}
          >
            <span>{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}

export default Menu;

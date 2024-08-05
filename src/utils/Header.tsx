import React, { useEffect, useState } from "react";
import { Closebar, Menubar } from "../assets/icons";
import { base_domain } from "../helper/helps";
import Menu from "./Menu";
import MobileMenu from "./Mobile.Menu";

function Header() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window != "undefined") {
      window.addEventListener("scroll", () => {
        if (window.screenY > 70) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      });
    }
  }, []);
  return (
    <>
      <div
        className={`w-[100%] ${
          sticky ? "sticky" : ""
        } bg-deep px-4 flex justify-center`}
      >
        <div className="h-[70px] md:px-4 w-[100%] md:w-[90%] lg:w-[80%] flex justify-between items-center">
          <div className=" ">
            <p
              className="text-primary text-[20px]  font-rubik cursor-pointer hover:text-white"
              onClick={() => {}}
            >
              Easy<span className="text-[25px] text-secondary">+</span>
            </p>
          </div>
          <div className="hidden md:flex">
            <Menu />
          </div>
          <div className="md:hidden">
            {open ? (
              <Closebar
                className="text-white text-[30px] cursor-pointer"
                onClick={() => setOpen(false)}
              />
            ) : (
              <Menubar
                className="text-white text-[30px] cursor-pointer"
                onClick={() => setOpen(true)}
              />
            )}
          </div>
        </div>
      </div>
      {open && <MobileMenu />}
    </>
  );
}

export default Header;

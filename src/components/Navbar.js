import React, { useState, useEffect, useRef } from "react";
import AdminProfile from "./AdminProfile";
import Hambuger from "./Hambuger";
import SideNavbar from "./SideNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    document.body.style.overflowY = "auto";
    console.log("clicked");
  };

  return (
    <>
      <div className="bg-blue-900 w-full h-20 p-2 flex md:flex-row-reverse items-center sticky top-0 z-50">
        <AdminProfile />
        <Hambuger toggle={handleToggle} openSideBar={isOpen} />
      </div>

      <SideNavbar openSideBar={isOpen} />
    </>
  );
};

export default Navbar;

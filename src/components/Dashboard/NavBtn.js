import React from "react";
import { useNavigate } from "react-router";

const NavBtn = ({ name, icon }) => {
  let navigate = useNavigate();
  const handleNavigate = () => {
    if (name === "Interns Info") {
      console.log("Interns Info is clicked!");
      navigate("/intern-details");
      return "/intern-details";
    } else {
      navigate("/");
      return "/";
    }
  };
  return (
    <div
      className="bg-blue-600 rounded-sm
     hover:bg-blue-500 cursor-pointer 
     w-full h-16 mt-2 p-3 flex justify-evenly 
     flex-row-reverse text-slate-100
      font-blod text-lg active:bg-blue-900 focus:outline-none "
      onClick={handleNavigate}
    >
      <div> {name} </div>
      <div>
        <i className={`${icon}`}></i>
      </div>
    </div>
  );
};

export default NavBtn;

import React from "react";

const Hambuger = ({ toggle, openSideBar }) => {
  console.log(openSideBar);
  return (
    <>
      {" "}
      {openSideBar === false ? (
        <i
          className="fa-solid fa-bars text-white text-3xl absolute right-3 md:left-3 p-3 w-16 flex justify-center cursor-pointer"
          onClick={toggle}
        ></i>
      ) : (
        <i
          className="fa-solid fa-xmark text-white text-3xl absolute right-3 md:left-80 p-3 w-16 flex justify-center cursor-pointer"
          onClick={toggle}
        ></i>
      )}{" "}
    </>
  );
};

export default Hambuger;

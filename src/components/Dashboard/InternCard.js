import React, { useEffect, useState } from "react";

const InternCard = ({ Image, name, path, email }) => {
  return (
    <div
      className=" bg-slate-100 flex flex-col justify-center rounded-md overflow-hidden  w-64 mx-auto  mt-10 cursor-pointer
    shadow-md"
    >
      <img src={Image} className="h-full" alt="tappi" />
      <div className="flex flex-col items-center mt-2 text-slate-600 text-lg p-2">
        <div>Name: {name}</div>
        <div>Path: {path}</div>
        <div className="text-sm">
          <span className="font-bold">Contacts:</span> {email}
        </div>
      </div>
    </div>
  );
};

export default InternCard;

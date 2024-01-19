"use client";
import { useState, useEffect } from "react";
export default function Financial() {
  const [deskNa, setDeskNa] = useState("1");
  function handleNv(post: number) {
    setDeskNa(post.toString());
  }

  return (
    <div className="">
      <div className=" border-b-2 border-gray-500">
        <div className={`w-full px-12 py-3 flex flex-row justify-between `}>
          <div
            onClick={() => handleNv(1)}
            className={` font-mono px-2 py-1 rounded-md hover:bg-black hover:text-white duration-300 ${
              deskNa === "1" && "bg-black text-white"
            }`}
          >
            Revenue
          </div>
          <div
            onClick={() => handleNv(2)}
            className={` font-mono px-2 py-1 rounded-md hover:bg-black hover:text-white duration-300 ${
              deskNa === "2" && "bg-black text-white"
            }`}
          >
            P&L Statement
          </div>
          <div
            onClick={() => handleNv(3)}
            className={` font-mono px-2 py-1 rounded-md hover:bg-black hover:text-white  duration-300 ${
              deskNa === "3" && "bg-black text-white"
            }`}
          >
            Balance Sheet
          </div>
          <div
            onClick={() => handleNv(4)}
            className={` font-mono px-2 py-1 rounded-md hover:bg-black hover:text-white  duration-300 ${
              deskNa === "4" && "bg-black text-white"
            }`}
          >
            Shareholdings
          </div>
        </div>
      </div>
      <div className={``}></div>
    </div>
  );
}
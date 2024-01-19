"use client";;
import { useState } from "react";
export default function Content() {
  const [deskNa, setDeskNa] = useState("1");
  function handleNv(post: number) {
    setDeskNa(post.toString());
  }
  console.log(deskNa);
  return (
    <div className="">
      <div className=" border-b-2 border-gray-500">
        <div className="w-full px-12 py-4 flex flex-row justify-between">
          <div
            onClick={() => handleNv(1)}
            className=" font-mono px-2 py-1 rounded-md bg-black text-white duration-300"
          >
            Revenue
          </div>
          <div
            onClick={() => handleNv(2)}
            className="font-mono px-2 py-1 rounded-md hover:bg-black hover:text-white duration-300"
          >
            P&L Statement
          </div>
          <div
            onClick={() => handleNv(3)}
            className="font-mono px-2 py-1 rounded-md hover:bg-black hover:text-white duration-300"
          >
            Balance Sheet
          </div>
          <div
            onClick={() => handleNv(4)}
            className="font-mono px-2 py-1 rounded-md hover:bg-black hover:text-white duration-300"
          >
            Ratios
          </div>
          <div
            onClick={() => handleNv(5)}
            className="font-mono px-2 py-1 rounded-md hover:bg-black hover:text-white duration-300"
          >
            Issues
          </div>
        </div>
      </div>
      <div className={``}></div>
    </div>
  );
}

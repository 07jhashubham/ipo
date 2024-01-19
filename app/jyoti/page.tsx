"use client";
import { Metadata } from "next";
import MainRight from "./MainRight";
import MainBottom from "./MainBottom";
import Financial from "./Financial";
import Revenue from "./Revenue";
import Analysis from "./Analysis";
import { useState } from "react";

export default function Page() {
  const [activeSection, setActiveSection] = useState("financial");

  function handleNv(post: string) {
    setActiveSection(post);
  }

  return (
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0">
      <div className="flex flex-col space-y-8 md:mb-10">
        <div className=" mx-3 md:mx-5 border-4 bg-white border-gray-400 rounded-lg">
          <MainRight />
        </div>
        <div className=" mx-3 md:mx-5 border-4 bg-white border-gray-400 rounded-lg">
          <MainBottom />
        </div>
      </div>

      <div className="hidden w-full mx-3 md:mx-5 md:flex flex-col">
        <div className="mx-5 flex flex-row  flex-shrink-0  max-w-fit space-x-6 items-center px-12 border-4 border-b-0  bg-white overflow-hidden  h-10 border-gray-400 rounded-lg">
          <div
            onClick={() => handleNv("financial")}
            className={` font-mono px-2 py-1 rounded-md hover:bg-blue-600 hover:text-white duration-300 ${
              activeSection === "financial" && "bg-blue-600 text-white"
            }`}
          >
            Financial statements
          </div>
          <div
            onClick={() => handleNv("analysis")}
            className={` font-mono px-2 py-1 rounded-md hover:bg-blue-600 hover:text-white duration-300 ${
              activeSection === "analysis" && "bg-blue-600 text-white"
            }`}
          >
            Analysis&Rating{" "}
          </div>
        </div>
        <div
          className={`mx-3 md:mx-5 border-4 bg-white flex-1 border-gray-400 md:max-h-[630px] rounded-lg ${
            activeSection !== "financial" && "hidden"
          }`}
        >
          <Financial />
        </div>
        <div
          className={`mx-3 md:mx-5 border-4 bg-white flex-1 border-gray-400 md:max-h-[630px] rounded-lg ${
            activeSection !== "analysis" && "hidden"
          }`}
        >
          <Analysis />
        </div>
      </div>

      <div className=" mx-3 md:mx-5 border-4 md:hidden bg-white md:w-full border-gray-400  md:max-h-[666px] rounded-lg">
        <div className=" my-2  mx-5 overflow-hidden">
          <Revenue />
        </div>
      </div>
    </div>
  );
}

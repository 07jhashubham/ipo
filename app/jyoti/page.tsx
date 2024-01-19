"use client";
import { Metadata } from "next";
import MainRight from "./MainRight";
import MainBottom from "./MainBottom";
import Analysis from "./Analysis";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import * as React from "react";
import Financial from "./Financial";
import Revenue from "./Revenue";
import Profit from "./profit";
import Balance from "./balanceSheet";
import Holding from "./shareHolding";
import Prepost from "./prePost";
import Valuation from "./valuation";
import Ratings from "./Ratings";
import Gmp from "./gmp";

export default function Page() {
  const [activeSection, setActiveSection] = React.useState("financial");

  function handleNv(post: string) {
    setActiveSection(post);
  }
  const [alignment, setAlignment] = React.useState("finance");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };


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

      <div className="hidden w-full mx-5 md:flex flex-col">
        <div className="mx-5 flex flex-row  flex-shrink-0  max-w-fit space-x-3 items-center px-3 border-4 border-b-0   overflow-hidden  h-10 border-gray-400 rounded-lg">
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
            Analysis & Rating{" "}
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
      <div className=" flex items-center md:hidden justify-center">
        <ToggleButtonGroup
          color="standard"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="finance">Financial statements</ToggleButton>
          <ToggleButton value="analysis">Analysis & Rating</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div
        className={` mx-5 my-2 ${
          alignment !== "finance" && "hidden"
        } overflow-hidden border-4 md:hidden px-4 bg-white md:w-full border-gray-400 rounded-lg `}
      >
        <Revenue />
      </div>
      <div
        className={` mx-5 my-2 ${
          alignment !== "finance" && "hidden"
        } overflow-hidden border-4 md:hidden px-4 bg-white md:w-full border-gray-400 rounded-lg `}
      >
        <Profit />
      </div>
      <div
        className={` mx-5 my-2 ${
          alignment !== "finance" && "hidden"
        } overflow-hidden border-4 md:hidden px-4 bg-white md:w-full border-gray-400 rounded-lg `}
      >
        <Balance />
      </div>
      <div
        className={` mx-5 my-2 ${
          alignment !== "finance" && "hidden"
        } overflow-hidden border-4 md:hidden px-4 bg-white md:w-full border-gray-400 rounded-lg `}
      >
        <Holding />
      </div>
      <div
        className={` mx-5 my-2 ${
          alignment !== "analysis" && "hidden"
        } overflow-hidden border-4 md:hidden px-4 bg-white md:w-full border-gray-400 rounded-lg `}
      >
        <Prepost />
      </div>
      <div
        className={` mx-5 my-2 ${
          alignment !== "analysis" && "hidden"
        } overflow-hidden border-4 md:hidden px-4 bg-white md:w-full border-gray-400 rounded-lg `}
      >
        <Valuation />
      </div>
      <div
        className={` mx-5 my-2 ${
          alignment !== "analysis" && "hidden"
        } overflow-hidden border-4 md:hidden px-4 bg-white md:w-full border-gray-400 rounded-lg `}
      >
        <Ratings />
      </div>
      <div
        className={` mx-5 my-2 ${
          alignment !== "analysis" && "hidden"
        } overflow-hidden border-4 md:hidden px-4 bg-white md:w-full border-gray-400 rounded-lg `}
      >
        <Gmp />
      </div>
    </div>
  );
}

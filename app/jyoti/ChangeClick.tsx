import { useState } from "react";
import Analysis from "./Analysis";
import Financial from "./Financial";
export default function ChangeClick() {
    const [deskNa, setDeskNa] = useState("1");
    function handleNv(post: string) {
      setDeskNa(post.toString());
    }
    return (
      <div className="hidden w-full mx-3 md:mx-5 md:flex flex-col">
        <div className="mx-5 flex flex-row  flex-shrink-0  max-w-fit space-x-6 items-center px-12 border-4 border-b-0  bg-white overflow-hidden  h-10 border-gray-400 rounded-lg">
          <div
            onClick={() => handleNv("1")}
            className={` font-mono px-2 py-1 rounded-md hover:bg-blue-600 hover:text-white duration-300 ${
              deskNa === "1" && "bg-blue-600 text-white"
            }`}
          >
            Financial statements
          </div>
          <div
            onClick={() => handleNv("2")}
            className={` font-mono px-2 py-1 rounded-md hover:bg-blue-600 hover:text-white duration-300 ${
              deskNa === "2" && "bg-blue-600 text-white"
            }`}
          >
            Analysis&Rating{" "}
          </div>
        </div>
        <div
          className={`mx-3 md:mx-5 border-4 hidden md:block bg-white flex-1 border-gray-400 md:max-h-[630px] rounded-lg ${
            deskNa !== "1" && "hidden"
          }`}
        >
          <Financial />
        </div>
        <div
          className={`mx-3 md:mx-5 border-4 hidden md:block bg-white flex-1 border-gray-400 md:max-h-[630px] rounded-lg ${
            deskNa !== "2" && "hidden"
          }`}
        >
          <Analysis />
        </div>
      </div>
    );
}
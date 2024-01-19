import { Metadata } from "next";
import MainRight from "./MainRight";
import MainBottom from "./MainBottom";
import Content from "./Content";
import Revenue from "./Revenue";

export const metadata: Metadata = {
  title: "Jyoti",
  description: "Jyoti Meta data",
};

export default function Page() {
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
      <div className=" mx-3 md:mx-5 border-4 hidden md:block bg-white md:w-full border-gray-400  md:max-h-[666px] rounded-lg">
        <Content />
      </div>
      <div className=" mx-3 md:mx-5 border-4 md:hidden bg-white md:w-full border-gray-400  md:max-h-[666px] rounded-lg">
        <div className=" my-2  mx-5 overflow-hidden">
          <Revenue />
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Logo.png";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import MobileNav from "./MobileNav";
import DeskNav from "./DeskNav";
import { Roboto_Mono, Oswald } from "next/font/google";

const libreBaskerville = Roboto_Mono({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});
const oswald = Oswald({ weight: "700", style: "normal", subsets: ["latin"] });

export default function Home() {
  const [backGround, setBackGround] = useState("bg-green-500");
  const [secBackGroud, setSecBackGround] = useState("bg-blue-500");
  const [textClor, setTextColor] = useState("text-red-500");
  useEffect(() => {
    let interval = setInterval(() => {
      setBackGround((x) =>
        x === "bg-green-500" ? "bg-red-500" : "bg-green-500"
      );
    }, 1000);
    let interval2 = setInterval(() => {
      setSecBackGround((x) => {
        return x === "bg-blue-500" ? "bg-orange-500" : "bg-blue-500";
      });
    }, 1000);
    let interval3 = setInterval(() => {
      setTextColor((x) => {
        return x === "text-red-500" ? "text-green-500" : "text-red-500";
      });
    }, 500);
    return () => {
      clearInterval(interval);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <main className=" relative">
      <Marquee
        speed={60}
        autoFill
        pauseOnHover
        className={`w-full justify-between items-center flex bg-black h-16 ${textClor} sticky`}
      >
        <div
          className={` md:space-x-24 space-x-8 flex flex-row text-xl mr-8 md:mr-24 ${oswald}`}
        >
          <Link href={"/jyoti"}>Jyoyi Indus</Link>
          <div className=" ">Raju Malni</div>
          <div>Unknown</div>
          <div className=" ">Loop Last</div>
        </div>
      </Marquee>
      <DeskNav />

      <div className="flex flex-col h-screen items-center justify-center -mt-16 relative">
        <Image alt="sfs" src={logo} className="" />
        <p className={` text-xl md:text-2xl font-bold tracking-wide text-center mb-10 ${libreBaskerville}`}>
          Get any Ipo details
        </p>
        <div className=" p-3 md:max-w-xl w-full relative">
          <p className={`absolute right-0 top-0 ${backGround} px-2 rounded-md`}>
            OnGoing Ipo's
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              href={"/jyoti"}
              className="text-center border hover:shadow-lg truncate hover:bg-gray-200 bg-black text-white hover:text-black hover:translate-x-0.5 transition-all hover:rounded-xl  duration-200 md:px-4 border-gray-400 rounded-lg py-1 md:py-2 text-lg md:text-xl "
            >
              Jyoti Tyers
            </Link>

            <p className="text-center border truncate hover:shadow-lg hover:bg-gray-200 bg-black text-white hover:text-black hover:translate-x-0.5 transition-all hover:rounded-xl  duration-200 border-gray-400 rounded-lg py-1 md:py-2 text-lg md:text-xl ">
              Unknown
            </p>
            <p className="text-center border truncate hover:shadow-lg hover:bg-gray-200 bg-black text-white hover:text-black hover:translate-x-0.5 transition-all hover:rounded-xl  duration-200 border-gray-400 rounded-lg py-1 md:py-2 text-lg md:text-xl ">
              Raju Malni
            </p>
            <p className="text-center border truncate hover:shadow-lg hover:bg-gray-200 bg-black py-1 md:py-2  text-white hover:text-black hover:translate-x-0.5 transition-all hover:rounded-xl  duration-200 border-gray-400 rounded-lg text-lg md:text-xl ">
              Loop Last
            </p>
          </div>
        </div>
        <div className=" p-3 md:max-w-xl w-full relative">
          <p
            className={`absolute left-0 top-0 ${secBackGroud} px-2 rounded-md`}
          >
            Upcoming Ipo's
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              href={"/jyoti"}
              className="text-center border truncate hover:shadow-lg hover:bg-gray-200 py-1 md:py-2 bg-black text-white hover:text-black hover:translate-x-0.5 transition-all hover:rounded-xl  duration-200 border-gray-400 rounded-lg text-lg md:text-xl "
            >
              Jyoti Tyers
            </Link>
            <p className="text-center border truncate hover:shadow-lg hover:bg-gray-200 py-1 md:py-2 bg-black text-white hover:text-black hover:translate-x-0.5 transition-all hover:rounded-xl  duration-200 border-gray-400 rounded-lg text-lg md:text-xl ">
              Unknown
            </p>
            <p className="text-center border truncate hover:shadow-lg hover:bg-gray-200 py-1 md:py-2 bg-black text-white hover:text-black hover:translate-x-0.5 transition-all roun hover:rounded-xl  duration-200 border-gray-400 rounded-lg text-lg md:text-xl ">
              Raju Malni
            </p>
            <p className="text-center border truncate hover:shadow-lg hover:bg-gray-200 py-1 md:py-2 bg-black text-white hover:text-black hover:translate-x-0.5 transition-all hover:rounded-xl  duration-200 border-gray-400 rounded-lg text-lg md:text-xl ">
              Loop Last
            </p>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </main>
  );
}

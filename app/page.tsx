"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Logo.png";
import { useState, useEffect } from "react";

export default function Home() {
  const [backGround, setBackGround] = useState("bg-green-500");
  const [secBackGroud, setSecBackGround] = useState("bg-blue-500");
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
    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, []);

  return (
    <main className="">
      <div className="flex flex-col h-screen items-center justify-center ">
        <Image alt="sfs" src={logo} className="" />
        <p className=" text-xl font-medium font-serif text-center mb-10">
          Get any Ipo details
        </p>
        <div className=" p-3 md:w-96 w-full relative">
          <p className={`absolute right-0 top-0 ${backGround} px-2 rounded-md`}>
            OnGoing Ipo's
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              href={"/jyoti"}
              className="text-center border hover:shadow-lg hover:bg-gray-300 hover:translate-x-0.5 transition-all duration-200 border-gray-400 rounded-lg text-lg md:text-xl "
            >
              Jyoti Tyers
            </Link>
            <p className="text-center border hover:shadow-lg hover:bg-gray-300 hover:translate-x-0.5 transition-all duration-200 border-gray-400 rounded-lg text-lg md:text-xl ">
              Unknown
            </p>
            <p className="text-center border hover:shadow-lg hover:bg-gray-300 hover:translate-x-0.5 transition-all duration-200 border-gray-400 rounded-lg text-lg md:text-xl ">
              Raju Malni
            </p>
            <p className="text-center border hover:shadow-lg hover:bg-gray-300 hover:translate-x-0.5 transition-all duration-200 border-gray-400 rounded-lg text-lg md:text-xl ">
              Loop Last
            </p>
          </div>
        </div>
        <div className=" p-3 md:w-96 w-full relative">
          <p
            className={`absolute left-0 top-0 ${secBackGroud} px-2 rounded-md`}
          >
            Upcoming Ipo's
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              href={"/jyoti"}
              className="text-center border hover:shadow-lg hover:bg-gray-300 hover:translate-x-0.5 transition-all duration-200 border-gray-400 rounded-lg text-lg md:text-xl "
            >
              Jyoti Tyers
            </Link>
            <p className="text-center border hover:shadow-lg hover:bg-gray-300 hover:translate-x-0.5 transition-all duration-200 border-gray-400 rounded-lg text-lg md:text-xl ">
              Unknown
            </p>
            <p className="text-center border border-gray-400 hover:shadow-lg hover:bg-gray-300 hover:translate-x-0.5 transition-all duration-200 rounded-lg text-lg md:text-xl ">
              Raju Malni
            </p>
            <p className="text-center border border-gray-400 rounded-lg hover:shadow-lg hover:bg-gray-300 hover:translate-x-0.5 transition-all duration-200 text-lg md:text-xl ">
              Loop Last
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

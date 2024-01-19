"use client";
import Marquee from "react-fast-marquee";
import MobileNav from "../MobileNav";
import DeskNav from "../DeskNav";
import { Roboto_Mono, Oswald } from "next/font/google";
import { useState, useEffect } from "react";
import Link from "next/link";

const oswald = Oswald({ weight: "700", style: "normal", subsets: ["latin"] });
export default function Layout({ children }: { children: React.ReactNode }) {
  const [textClor, setTextColor] = useState("text-red-500");
  useEffect(() => {
    let interval3 = setInterval(() => {
      setTextColor((x) => {
        return x === "text-red-500" ? "text-green-500" : "text-red-500";
      });
    }, 500);
    return () => {
      clearInterval(interval3);
    };
  }, []);
  return (
    <div className=" ">
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
          <div className=" ">Reliance</div>
          <div>Manakasia</div>
          <div className=" ">Sahara</div>
        </div>
      </Marquee>
      <DeskNav />
      <div className=" mt-10">{children}</div>
      <div className="md:hidden w-full h-16">
        <MobileNav />
      </div>
    </div>
  );
}

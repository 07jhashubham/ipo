import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";

export default function MobileNav() {
  const [value, setValue] = useState(0);

  function handleClick(x: number) {
    setValue(x);
  }

  return (
    <div className="w-full fixed bottom-0 left-0 z-10 flex flex-row justify-between px-4 text-sm">
      <Link href={"/"} passHref>
        <div
          className={`flex flex-col items-center ${
            value === 0 ? "text-black" : "text-gray-500"
          }`}
          onClick={() => handleClick(0)}
        >
          <HomeIcon style={{ fontSize: 30 }} />
          Home
        </div>
      </Link>
      <Link href={"/blogs"} passHref>
        <div
          className={`flex flex-col items-center ${
            value === 1 ? "text-black" : "text-gray-500"
          }`}
          onClick={() => handleClick(1)}
        >
          <LocalLibraryIcon style={{ fontSize: 30 }} />
          Blogs
        </div>
      </Link>
      <Link href={"/search"} passHref>
        <div
          className={`flex flex-col items-center ${
            value === 2 ? "text-black" : "text-gray-500"
          }`}
          onClick={() => handleClick(2)}
        >
          <SearchIcon style={{ fontSize: 30 }} />
          Search
        </div>
      </Link>
      <Link href={"/account"} passHref>
        <div
          className={`flex flex-col items-center ${
            value === 3 ? "text-black" : "text-gray-500"
          }`}
          onClick={() => handleClick(3)}
        >
          <AccountCircleIcon style={{ fontSize: 30 }} />
          Account
        </div>
      </Link>
    </div>
  );
}

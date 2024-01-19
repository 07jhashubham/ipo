import Link from "next/link"
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
export default function DeskNav() {
    return (
      <div className=" group transition-all duration-200 hidden md:block">
        <div className="absolute top-1/2 bg-white  right-0 group-hover:-translate-y-40 transform z-10 rotate-90 origin-right mr-5  flex flex-col items-center">
          <div className="mx-10 hidden  group-hover:block transform -rotate-90 group-hover:mt-44">
            <div className="flex flex-col space-y-2 ">
              <Link
                href="/"
                className=" hover:bg-black px-4 py-2 hover:text-white rounded-md"
              >
                Home
              </Link>
              <Link
                href="/blogs"
                className=" hover:bg-black px-4 py-2 hover:text-white rounded-md"
              >
                Blogs
              </Link>
              <Link
                href="/about"
                className=" hover:bg-black px-4 py-2 hover:text-white rounded-md"
              >
                About
              </Link>
              <Link
                href="/account"
                className=" hover:bg-black px-4 py-2 hover:text-white rounded-md"
              >
                Account
              </Link>
            </div>
          </div>
          <div className="bg-black text-gray-200 py-2 px-4 ">
            <span className="mr-2">Navigation Links</span>
            <span className="ml-2 group-hover:hidden">
              <PlayArrowIcon
                style={{ fontSize: 30, transform: "rotate(90deg)" }}
              />
            </span>
            <span className="ml-2 hidden group-hover:inline-block">
              <PlayArrowIcon
                style={{ fontSize: 30, transform: "rotate(-90deg)" }}
              />
            </span>
          </div>
        </div>
      </div>
    );
}
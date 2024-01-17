import Link from "next/link"
export default function DeskNav() {
    return (
      <div>
        <div className=" w-full h-4 flex justify-between items-center">
          <div>
            <Link href={"/"}>Home</Link>
           
          </div>
        </div>
      </div>
    );
}
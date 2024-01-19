import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";
import Link from "next/link";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
export default function MainRight() {
  return (
    <div className=" my-2  mx-5 md:max-w-80 max-h-[384px] md:max-h-[414px] overflow-hidden">
      <div className="flex mb-2 flex-row items-center justify-between md:space-x-8">
        <h1 className=" text-2xl font-bold ">Jyoti Industries</h1>
        <div className="flex flex-col">
          <div className="flex flex-row space-x-2">
            <div className="text-sm">
              <CurrencyRupeeIcon style={{ fontSize: 18 }} /> 2,704
            </div>
            <div className=" text-sm text-red-500 font-bold items-center">
              <ArrowCircleDownRoundedIcon style={{ fontSize: 15 }} />
              -1.80%
            </div>
          </div>
          <div className=" text-xs text-wrap ">18 Jan - GMP</div>
        </div>
      </div>
      <Link
        href={"https://jyoti-industries.com/"}
        className=" text-blue-600 font-bold"
      >
        <InsertLinkIcon style={{ rotate: "-45deg" }} /> jyoti-industries.com
      </Link>
      <div className="mt-5 text-xl font-semibold tracking-widest">ABOUT</div>
      <p>
        Jyoti Industries is involved in making Starch-based Adhesives and Guar
        Gum. it was brought to life in the year 1998 and since then has been
        constantly upgrading its production practices and product profile.
      </p>
      <div className="mt-5 text-xl font-semibold tracking-widest uppercase">
        Key point
      </div>
      <p>
        Revenue Mix FY23 <br /> Oleo Chemicals: 93% <br /> Nutraceutical: 7%
      </p>
    </div>
  );
}
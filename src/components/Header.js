import Image from "next/image";
import Link from "next/link";
import { web_assets } from "@/utils/constants";
export default function Header() {
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between Mobile:h-full mt-5 px-10 Mobile:p-0">
          <div
            className={` w-[242px] pl-6 logo flex items-center h-[64px] `}
          >
            <Link href={"/"}>
              <Image
                src={web_assets + "logo.svg"}
                width={106}
                height={27}
                alt={"Logo Image"}
              />
            </Link>
          </div>
          <div className="w-6/12 logo  h-[64px] flex items-center justify-center Mobile:hidden">
            <div className="headerLinks flex items-center justify-center gap-12">
              <Link
                href={"/"}
                className="text-base text-black font-ProximaNova-Regular"
              >
                How it works
              </Link>
              <Link
                href={"/about"}
                className="text-base text-black font-ProximaNova-Regular"
              >
                Integrations
              </Link>
              <Link
                href={"#"}
                className="text-base text-black font-ProximaNova-Regular"
              >
                Use cases
              </Link>
              <Link
                href={"#"}
                className="text-base text-black font-ProximaNova-Regular"
              >
                Community
              </Link>
            </div>
          </div>
          <div className="w-2/12 float-right text-right pr-6  h-[64px] flex items-center justify-end">
            <div>
              <button
                className="text-sm font-ProximaNova-Bold bg-color-purple text-white hover:opacity-85 hover:text-white rounded-[50px]  w-[185px] h-[51px] 
   transform transition ease-in-out duration-400   disabled:text-white disabled:cursor-not-allowed disabled:opacity-25 disabled:bg-slate-700 disabled:border-slate-700 disabled:hover:text-white"
           
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

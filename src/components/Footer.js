import Image from "next/image";
import Link from "next/link";
import { web_assets } from "@/utils/constants";
export default function Footer() {
  return (
    <>
      <div className="w-full py-10 relative ">
        <div className="flex items-center justify-between Mobile:h-full mt-5 px-10">
          <div className={` w-1/2 pl-6 logo bg-white  h-[64px] `}>
            <Link href={"/"}>
              <Image
                src={web_assets + "logo.png"}
                width={106}
                height={27}
                alt={"Logo Image"}
              />
            </Link>
            <p className="text-[14px] mt-4 flex font-ProximaNova-Regular">
              Connect with us
              <span className="ml-12 flex">
                <Link  href={"/"}>
                  <Image
                    src={web_assets + "icons/linkedIn.svg"}
                    width={17}
                    height={17}
                    className="mr-4"
                    alt={"linkedIn"}
                  />
                </Link>
                <Link  href={"/"}>
                  <Image
                    src={web_assets + "icons/twiter.svg"}
                    width={17}
                    height={17}
                    alt={"twiter"}
                  />
                </Link>
              </span>
            </p>
          </div>

          <div className="w-1/2 float-right text-right pr-6  h-[64px] flex items-center justify-end">
            <div>
              <button
                className="text-sm font-ProximaNova-Bold bg-color-purple text-white hover:opacity-85 hover:text-white rounded-[50px]  w-[185px] h-[51px] 
   transform transition ease-in-out duration-400   disabled:text-white disabled:cursor-not-allowed disabled:opacity-25 disabled:bg-slate-700 disabled:border-slate-700 disabled:hover:text-white"
              >
                Join Waitlist
              </button>
              <p className="text-[14px] mt-4">
                © Copyright 2024. Wellows. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

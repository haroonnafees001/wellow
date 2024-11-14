import Image from "next/image";
import Link from "next/link";
import { web_assets } from "@/utils/constants";
import Modal from "./Modal";
export default function Header() {
  return (
    <>
      <div className="w-full  border-b fixed top-0 z-10 bg-white">
        <div className="flex items-center justify-between Mobile:h-full mt-3 mb-3 px-10 Mobile:p-0">
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
                href={"#hiw"}
                className="text-base text-black font-ProximaNova-Regular"
              >
                How it works
              </Link>
              <Link
                href={"#integration"}
                className="text-base text-black font-ProximaNova-Regular"
              >
                Integrations
              </Link>
              <Link
                href={"#usecases"}
                className="text-base text-black font-ProximaNova-Regular"
              >
                Use cases
              </Link>
              <Link
                href={"#slack"}
                className="text-base text-black font-ProximaNova-Regular"
              >
                Community
              </Link>
            </div>
          </div>
          <div className="w-2/12 float-right text-right pr-6  h-[64px] flex items-center justify-end">
            <div>
                <Modal/>
          
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { web_assets } from "@/utils/constants";
import Button from "./Button";
export default function Header() {
  return (
    <>
      <div className="w-full border bottom-1">
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
                <Button url="https://www.figma.com/design/4uySMqdnoGRwtZspZoHjrq/AI-Agent?node-id=40-68&node-type=canvas&t=2OdYBhUfyl8fMt37-0" btnText="Join Waitlist"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

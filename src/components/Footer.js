import Image from "next/image";
import Link from "next/link";
import { web_assets } from "@/utils/constants";
import Button from "./Button";
export default function Footer() {
  return (
    <>
      <div className="w-full py-10 relative ">
        <div className="flex items-center justify-between Mobile:h-auto mt-5 px-10 Mobile:p-0 Mobile:flex-col Mobile:justify-center">
          <div className={` w-1/2 pl-6 logo h-[64px] Mobile:pl-0 Mobile:w-full Mobile:items-center Mobile:justify-center Mobile:flex Mobile:flex-col `}>
            <Link href={"/"}>
              <Image
                src={web_assets + "logo.svg"}
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

          <div className="w-1/2 float-right text-right pr-6  h-[64px] flex items-center justify-end Mobile:float-none Mobile:w-full Mobile:h-auto Mobile:mt-5  Mobile:text-center Mobile:justify-center">
            <div>
            <Button url="https://www.figma.com/design/4uySMqdnoGRwtZspZoHjrq/AI-Agent?node-id=40-68&node-type=canvas&t=2OdYBhUfyl8fMt37-0" btnText="Join Waitlist"/>

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

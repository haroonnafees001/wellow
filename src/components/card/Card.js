import { web_assets } from "@/utils/constants";
import Image from "next/image";

export default function Card() {
  return (
    <>
      <div className="border border-2 border-color-purple rounded-[30px] w-1/3 px-8 py-14 mx-6 text-center Mobile:w-full Mobile:m-0 Mobile:mb-10">
        <div className="w-[114px] h-[114px] bg-color-purple flex justify-center items-center rounded-full m-auto shadow-gray-50 shadow-md">
          <Image src={web_assets + "icons/1.svg"} width={58} height={58} />
        </div>

        <h1 className="text-[24px] mt-5 font-ProximaNova-Heavy">Opeations</h1>
        <p className="text-[#878787] text-[18px]  mt-5">
          Competitive Insights in a Snap: See what your competitors are up to
          and find gaps to own the market.
        </p>
      </div>
    </>
  );
}

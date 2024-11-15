import { web_assets } from "@/utils/constants";
import Image from "next/image";

export default function SecondFold() {
  return (
    <>
      <div className="w-full px-10 m-auto Mobile:w-full" id="how-it-work">
        <div className="flex items-center justify-center h-full flex-col text-center ">
          <video autoPlay muted loop width="auto" className="border-2 border-color-black/5 rounded-xl">
            <source src={web_assets + "promo.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-[38px] font-ProximaNova-Bold mb-20 relative top-[20px]">
          Get instant AI Agents at your service.
          </p>
        </div>
      </div>
    </>
  );
}

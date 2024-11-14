import { web_assets } from "@/utils/constants";
import Image from "next/image";
import Modal from "./Modal";

export default function FirstFold() {
  return (
    <>
      <div className="w-full h-[70vh] mt-10">
        <div className="flex items-center justify-center h-full flex-col text-center ">
        <video autoPlay muted loop width="auto">
            <source src={web_assets + "home.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-[24px] font-ProximaNova-Regular mt-4">
          Your AI Agents on your finger tips. All it takes is a simple prompt.

          </p>
          <div className="mt-5 flex flex-col items-center justify-center">
          <Modal></Modal>
            {/* <p className="text-[16px] font-ProximaNova-Regular mt-4 flex">
              First 100 users get 3 months free
              <Image
                className="rotate-[35deg] relative top-[-5px]"
                src={web_assets + "rocket.gif"}
                width={40}
                height={27}
                alt={"animate"}
              />
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

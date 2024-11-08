import { web_assets } from "@/utils/constants";
import Image from "next/image";

export default function FirstFold() {
  return (
    <>
      <div className="w-full h-[70vh]">
        <div className="flex items-center justify-center h-full flex-col text-center ">
          <h1 className="text-[70px] text-center font-Poppins-Bold leading-[75px]">
            <span className="text-color-purple"> Your AI</span> <br /> work
            fellow
          </h1>
          <p className="text-[24px] font-Poppins-Regular mt-4">
            Meet Wellows that turns your natural language prompts into AI <br />
            Agents that automate your workflows.
          </p>
          <div className="mt-12">
            <button
              className="text-sm font-Poppins-Bold bg-color-purple text-white hover:opacity-85 hover:text-white rounded-[50px]  w-[185px] h-[51px]  transform transition ease-in-out duration-400   disabled:text-white disabled:cursor-not-allowed disabled:opacity-25 disabled:bg-slate-700 disabled:border-slate-700 disabled:hover:text-white"
            >
              Join Waitlist
            </button>
            <p className="text-[16px] font-Poppins-Regular mt-4 flex">
              First 100 users get 3 months free
              <Image
                className="rotate-[35deg] relative left-[-5px] top-[-5px]"
                src={web_assets + "rocket.gif"}
                width={40}
                height={27}
                alt={"animate"}
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import { web_assets } from "@/utils/constants";
import Image from "next/image";

export default function ThirdFold() {
  return (
    <>
      <div className=" w-[1112px] m-auto mt-20">
        <div className="flex">
            <div className="w-2/4">
            <Image
            src={web_assets + "frame.svg"}
            width={523}
            height={470}
            alt={""}
          />
            </div>
            <div className="w-2/4 flex flex-col justify-center pl-40">
                    <h1 className="text-[38px] font-Poppins-Bold">Your Workflow, Integrated</h1>
                    <p className="text-[20px] mt-5">Wellows connects all your tools, tasks, and updates in one place – say goodbye to the chaos and keep every project running smoothly.</p>
                    <button
                className=" mt-5 text-sm font-Poppins-Bold bg-color-purple text-white hover:opacity-85 hover:text-white rounded-[50px]  w-[185px] h-[51px] 
   transform transition ease-in-out duration-400   disabled:text-white disabled:cursor-not-allowed disabled:opacity-25 disabled:bg-slate-700 disabled:border-slate-700 disabled:hover:text-white"
           
              >
                Join Waitlist
              </button>
            </div>
        </div>
      </div>
    </>
  );
}

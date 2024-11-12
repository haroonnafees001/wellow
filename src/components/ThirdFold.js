import { web_assets } from "@/utils/constants";
import Image from "next/image";

export default function ThirdFold() {
  return (
    <>
      <div className=" w-9/12 m-auto mt-20 Mobile:w-full Mobile:p-10">
        <div className="flex Mobile:flex-col">
            <div className="w-2/4 Mobile:w-full">
            <Image
            src={web_assets + "frame.svg"}
            width={523}
            height={470}
            alt={"frame"}
          />
            </div>
            <div className="w-2/4 flex flex-col justify-center relative pl-32  Mobile:w-full Mobile:pl-0">
                    <h1 className="text-[38px] font-ProximaNova-Bold">Your Workflow, Integrated</h1>
                    <p className="text-[20px] mt-5">Wellows connects all your tools, tasks, and updates in one place – say goodbye to the chaos and keep every project running smoothly.</p>
                    <button
                className=" mt-5 text-sm font-ProximaNova-Bold bg-color-purple text-white hover:opacity-85 hover:text-white rounded-[50px]  w-[185px] h-[51px] 
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

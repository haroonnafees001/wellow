import { web_assets } from "@/utils/constants";
import Image from "next/image";
import Modal from "./Modal";

export default function ThirdFold() {
  return (
    <>
      <div className=" w-full m-auto mt-20 Mobile:w-full Mobile:p-10">
        <div className="flex Mobile:flex-col">
          <div className="w-2/6 flex flex-col justify-center relative Mobile:w-full Mobile:pl-0">
          <Image
                    src={web_assets + "Integeration-Left.svg"}
                    width={464}
                    height={429}
                    alt={"IntegerationLeft"}
                  />
          </div>
          <div className="w-2/6 flex flex-col justify-center items-center relative Mobile:w-full Mobile:pl-0 wellowBg text-center">
            <h1 className="text-[38px] font-ProximaNova-Bold">
              Your Workflow, Integrated
            </h1>
            <p className="text-[20px] mt-3 text-[#363744] text-center mb-7">
              Connect all your tools, tasks, and updates <br/>  in one place – say goodbye to the chaos and keep every project running smoothly.
            </p>
            <Modal/>
          </div>
          <div className="w-2/6 flex justify-end relative Mobile:w-full Mobile:pl-0">
          <Image
                    src={web_assets + "Integeration-Right.svg"}
                    width={464}
                    height={429}
                    alt={"IntegerationRight"}
                  />
          </div>
          </div>
        </div>
    </>
  );
}

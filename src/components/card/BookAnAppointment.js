import { web_assets } from "@/utils/constants";
import Image from "next/image";

export default function BookAnAppointment() {
  return (
    <>
      <div className="border border-2 border-color-purple flex rounded-[30px] w-[827px] p-8 m-auto items-center Mobile:w-full Mobile:flex-col">
        <div className="w-7/12 Mobile:w-full">
            <b className="text-[24px]">Want a Customise use case for you?</b> <br/>
            <button className="box-content px-10 mt-5 text-sm  font-ProximaNova-Bold bg-color-purple text-white hover:opacity-85 hover:text-white rounded-[50px]  w-[185px] h-[51px]  transform transition ease-in-out duration-400   disabled:text-white disabled:cursor-not-allowed disabled:opacity-25 disabled:bg-slate-700 disabled:border-slate-700 disabled:hover:text-white">
            Book an appointment
            </button>
        </div>
        <div className="w-1/3 flex justify-end Mobile:w-full Mobile:justify-center Mobile:mt-10">
        <Image
                src={web_assets + "book.gif"}
                width={100}
                height={100}
                alt={"animate"}
              />
        </div>

      </div>
    </>
  );
}

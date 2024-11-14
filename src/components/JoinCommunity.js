import { web_assets } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

export default function JoinCommunity() {
  return (
    <>
      <div className="flex w-9/12 h-[270px] p-8 m-auto justify-center my-10 bg-[#5d17e921] relative px-16 items-center Mobile:w-full Mobile:h-auto Mobile:flex-col">
        <div className="w-7/12 Mobile:w-full">
          <b className="text-[38px]">Join the community now</b>
          <p className="text-[20px] text-color-[#363744]">
            We happy to have you on our slack channel to keep you updated
          </p>
          <Link href="https://join.slack.com/t/wellowsworkspace/shared_invite/zt-2ugp4btpu-~KZqfCD0otjICnV2y3_I7A" target="_blank" className="box-content px-10 mt-5 text-[18px]  font-ProximaNova-Bold bg-color-purple text-white hover:opacity-85 inline-flex items-center justify-center hover:text-white rounded-[50px]  w-[185px] h-[51px]  transform transition ease-in-out duration-400   disabled:text-white disabled:cursor-not-allowed disabled:opacity-25 disabled:bg-slate-700 disabled:border-slate-700 disabled:hover:text-white">
            Join Now
          </Link>
        </div>
        <div className="w-1/3 flex justify-end  Mobile:w-full Mobile:justify-center">
        <Image
                src={web_assets + "slack.gif"}
                width={326}
                height={183}
                alt={"slack"}
              />
        </div>

        <div className="absolute bottom-[-35px] left-[-1px]">
          <div className="bg-[#ffffff70] w-[35px] h-[35px] rounded-full relative top-[28px] left-[-6px]"></div>
          <div className="bg-white w-[69px] h-[69px] rounded-full relative top-[-3px]"></div>
        </div>
      </div>
    </>
  );
}

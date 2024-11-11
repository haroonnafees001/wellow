import { web_assets } from "@/utils/constants";

export default function JoinCommunity() {
  return (
    <>
      <div className="flex w-9/12 h-[270px] p-8 m-auto flex-col justify-center my-10 bg-[#5d17e921] relative px-16">
        <b className="text-[38px]">Join the community now</b>
        <p className="text-[20px] text-color-[#363744]">
          We happy to have you on our slack channel to keep you updated
        </p>
        <button className="box-content px-10 mt-5 text-sm  font-ProximaNova-Bold bg-color-purple text-white hover:opacity-85 hover:text-white rounded-[50px]  w-[185px] h-[51px]  transform transition ease-in-out duration-400   disabled:text-white disabled:cursor-not-allowed disabled:opacity-25 disabled:bg-slate-700 disabled:border-slate-700 disabled:hover:text-white">
          Join Now
        </button>
        <div className="absolute bottom-[-35px] left-[-1px]">
          <div className="bg-[#ffffff70] w-[35px] h-[35px] rounded-full relative top-[28px] left-[-6px]"></div>
          <div className="bg-white w-[69px] h-[69px] rounded-full relative top-[-3px]"></div>
        </div>
      </div>
    </>
  );
}

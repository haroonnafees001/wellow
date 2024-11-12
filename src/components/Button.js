import Link from "next/link";


export default function Button({url, btnText,customClass=''}) {

  return (
    <Link
        href={url}
      className={`${customClass} text-sm flex items-center justify-center font-ProximaNova-Bold bg-color-purple text-white hover:opacity-85 hover:text-white rounded-[50px]  w-[185px] h-[51px] 
transform transition ease-in-out duration-400   disabled:text-white disabled:cursor-not-allowed disabled:opacity-25 disabled:bg-slate-700 disabled:border-slate-700 disabled:hover:text-white`}
    >
      {btnText}
    </Link>
  );
}

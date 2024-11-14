import Card from "./card/Card";
import BookAnAppointment from "./card/BookAnAppointment";
import Image from "next/image";
import { web_assets } from "@/utils/constants";

export default function WellowAtWork() {
  return (
    <>
      <div className=" w-9/12 m-auto my-40 Mobile:w-full">
        <h1 className="text-[38px] font-ProximaNova-Bold text-center">
          Wellows at work
        </h1>

        <div className="flex justify-around mt-5 Mobile:flex-col" id="usecases">
          <div className="border border-2 border-color-purple rounded-[30px] w-1/3 p-6 mx-6 text-center Mobile:w-full Mobile:m-0 Mobile:mb-10">
            <div className="w-[114px] h-[114px] bg-white  flex justify-center items-center rounded-full m-auto shadow-gray-400 shadow-lg">
              <Image
                src={web_assets + "icons/1.svg"}
                width={58}
                height={58}
                alt="icons"
              />
            </div>

            <h1 className="text-[24px] mt-5 font-ProximaNova-Heavy">
            Marketing
            </h1>
            <div className="text-[#878787] text-[18px] mt-8">
              <ul className="text-left ml-4">
                <li className="list-disc mb-4">
                  <b className="text-black">Quick Competitor Insights:</b> Analyze competitors and
                  identify growth opportunities.
                </li>
                <li className="list-disc mb-4">
                  <b className="text-black">SEO Made Simple:</b> Discover keywords and track performance effortlessly.

                </li>
                <li className="list-disc mb-4">
                  <b className="text-black">Repurposwe Content:</b> Turn YouTube videos into blogs and newsletters.

                </li>
              </ul>
            </div>
          </div>



          <div className="border border-2 border-color-purple rounded-[30px] w-1/3 p-6 mx-6 text-center Mobile:w-full Mobile:m-0 Mobile:mb-10">
            <div className="w-[114px] h-[114px] bg-white  flex justify-center items-center rounded-full m-auto shadow-gray-400 shadow-lg">
              <Image
                src={web_assets + "icons/2.svg"}
                width={58}
                height={58}
                alt="icons"
              />
            </div>

            <h1 className="text-[24px] mt-5 font-ProximaNova-Heavy">
            Sales
            </h1>
            <div className="text-[#878787] text-[18px] mt-8">
              <ul className="text-left ml-4">
                <li className="list-disc mb-4">
                  <b className="text-black">Smart Targeting:</b> Segment audiences and connect with precision.
                </li>
                <li className="list-disc mb-4">
                  <b className="text-black">Personalized Outreach:</b> Discover keywords and track performance effortlessly.

                </li>
                <li className="list-disc mb-4">
                  <b className="text-black">Automated Follow-Ups:</b> Keep leads engaged without the manual effort.
                </li>
              </ul>
            </div>
          </div>




          <div className="border border-2 border-color-purple rounded-[30px] w-1/3 p-6 mx-6 text-center Mobile:w-full Mobile:m-0 Mobile:mb-10">
            <div className="w-[114px] h-[114px] bg-white  flex justify-center items-center rounded-full m-auto shadow-gray-400 shadow-lg">
              <Image
                src={web_assets + "icons/3.svg"}
                width={58}
                height={58}
                alt="icons"
              />
            </div>

            <h1 className="text-[24px] mt-5 font-ProximaNova-Heavy">
            Operations
            </h1>
            <div className="text-[#878787] text-[18px] mt-8">
              <ul className="text-left ml-4">
                <li className="list-disc mb-4">
                  <b className="text-black">Streamlined Assistance:</b>Let AI handle scheduling and documentation.
                </li>
                <li className="list-disc mb-4">
                  <b className="text-black">Inventory Automation: </b>
                  Monitor stock and automate orders with ease.
                </li>
                <li className="list-disc mb-4">
                  <b className="text-black">Real-Time Updates:</b> 
                  Stay informed on progress and team performance.


                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full mt-14">
          <BookAnAppointment />
        </div>
      </div>
    </>
  );
}

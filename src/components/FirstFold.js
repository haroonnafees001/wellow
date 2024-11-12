import { web_assets } from "@/utils/constants";
import Image from "next/image";
import Button from "./Button";

export default function FirstFold() {
  return (
    <>
      <div className="w-full h-[70vh] mt-10">
        <div className="flex items-center justify-center h-full flex-col text-center ">
        <video autoPlay muted loop width="100%">
            <source src={web_assets + "home.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-[24px] font-ProximaNova-Regular mt-4">
            Meet Wellows that turns your natural language prompts into AI <br />
            Agents that automate your workflows.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center">
          <Button url="https://www.figma.com/design/4uySMqdnoGRwtZspZoHjrq/AI-Agent?node-id=40-68&node-type=canvas&t=2OdYBhUfyl8fMt37-0" btnText="Join Waitlist"/>

            <p className="text-[16px] font-ProximaNova-Regular mt-4 flex">
              First 100 users get 3 months free
              <Image
                className="rotate-[35deg] relative top-[-5px]"
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

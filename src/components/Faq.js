import { web_assets } from "@/utils/constants";
import Image from "next/image";
import Accordion from "./Accordion";

export default function Faq() {
  const accordionItems = [
    {
      title: "Whats an AI Agent?",
      content: "Content for the first section goes here.",
    },
    {
      title: "What is your favorite AI Agent?",
      content: "Content for the second section goes here.",
    },
    {
      title: "What AI Agent does?",
      content: "Content for the third section goes here.",
    },
  ];

  return (
    <div className="relative w-full">
                <div className="blur"></div>
      <div className=" w-[896px] m-auto mt-20">
        <h1 className="text-[38px] font-ProximaNova-Bold text-center">
          Frequently ask questions
        </h1>

        <div className="flex justify-center items-center relative">
          <Accordion items={accordionItems} />
        </div>
      </div>
    </div>
  );
}

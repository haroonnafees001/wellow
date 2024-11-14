import { web_assets } from "@/utils/constants";
import Accordion from "./Accordion";

export default function Faq() {
  const accordionItems = [
    {
      title: " Do I need coding skills to use Wellows?",
      content: "Nope! With Wellows, creating AI agents is as easy as typing what you want in everyday language. No coding, no fuss.",
    },
    {
      title: "What can Wellows do for my business?",
      content: "Wellows boosts productivity with AI Helpers for marketing, sales, and operations. Free up your time to focus on growth while Wellows handles the busywork.",
    },
    {
      title: "Why choose Wellows over other AI tools?",
      content: "Unlike competitors, Wellows handles the complexities for you. Just provide a prompt describing your needs, and our Agent Builder does the rest. Zero complexity, 100% efficiency.",
    },
    {
      title: " Does Wellows work with my existing tools?",
      content: "You bet! Wellows seamlessly integrates with popular tools like Slack, HubSpot, Trello, Calendly, and more, so your AI agents keep your workflows running smoothly.",
    },
  ];

  return (
    <div className="relative w-full">
                <div className="blur"></div>
      <div className=" w-9/12 m-auto mt-20 Mobile:w-full">
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

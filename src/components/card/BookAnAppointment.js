"use client";
import { web_assets } from "@/utils/constants";
import Image from "next/image";
import CalendlyPopup from "../calendly/CalendlyPopup";

export default function BookAnAppointment() {
  return (
    <>
      <div className="border border-2 border-color-purple flex rounded-[30px] w-[827px] p-8 m-auto items-center Mobile:w-full Mobile:flex-col">
        <div className="w-7/12 Mobile:w-full Mobile:text-center Mobile:order-2">
          <p>
            <b className="text-[24px]">Is your work unique?</b> <br />
            Let’s discuss it, and our team will create a custom solution.
          </p>

          <CalendlyPopup url="https://calendly.com/shaheer-disrupt/wellows" />
        </div>
        <div className="w-1/3 flex justify-end Mobile:w-full Mobile:justify-center  Mobile:order-1 Mobile:mt-0 Mobile:mb-5">
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

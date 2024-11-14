"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  useEffect(() => {
    // Create a new script element
    const script = document.createElement("script");
    script.src =
      "https://app.viralsweep.com/vsa-widget-44e2ed-194592.js?sid=194592_292305"; // The external script URL
    script.async = true; // Load script asynchronously
    const formElement = document.getElementById("vsscript_194592_292305");
    if (formElement) {
      document.body.appendChild(script);
    }else{
      console.log("error")
    }

    // Clean up the script when the component unmounts
    return () => {
      if(formElement){
        document.body.removeChild(script);
      }
    };
  }, [isOpen]);
  return (
    <div>
      <button
        onClick={openModal}
        className="
         text-[18px] flex items-center justify-center font-ProximaNova-Bold bg-color-purple text-white hover:opacity-85 hover:text-white rounded-[50px]  w-[185px] h-[51px] 
transform transition ease-in-out duration-400   disabled:text-white disabled:cursor-not-allowed disabled:opacity-25 disabled:bg-slate-700 disabled:border-slate-700 disabled:hover:text-white
        "
      >
        Join Waitlist
      </button>

      {/* Modal */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={closeModal}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <div className="relative">
              <button
                onClick={closeModal}
                className=" fixed right-7 top-5"
              >
                
<svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1881_5284)">
<path d="M0.683722 14.0001C0.548501 14.0001 0.41631 13.96 0.30387 13.8849C0.191431 13.8098 0.103793 13.703 0.0520429 13.5781C0.000292829 13.4532 -0.0132448 13.3157 0.0131423 13.1831C0.0395295 13.0505 0.104656 12.9287 0.200284 12.8331L12.8331 0.200246C12.9613 0.0720308 13.1352 0 13.3165 0C13.4979 0 13.6718 0.0720308 13.8 0.200246C13.9282 0.328462 14.0002 0.50236 14.0002 0.683684C14.0002 0.865008 13.9282 1.03891 13.8 1.16712L1.16716 13.7999C1.10373 13.8635 1.02837 13.9139 0.945409 13.9482C0.862446 13.9826 0.773514 14.0002 0.683722 14.0001Z" fill="white"/>
<path d="M13.3165 14.0001C13.2267 14.0002 13.1378 13.9826 13.0548 13.9482C12.9718 13.9139 12.8965 13.8635 12.8331 13.7999L0.200246 1.16712C0.0720308 1.03891 0 0.865008 0 0.683684C0 0.50236 0.0720308 0.328462 0.200246 0.200246C0.328462 0.0720308 0.50236 0 0.683684 0C0.865008 0 1.03891 0.0720308 1.16712 0.200246L13.7999 12.8331C13.8956 12.9287 13.9607 13.0505 13.9871 13.1831C14.0135 13.3157 13.9999 13.4532 13.9482 13.5781C13.8964 13.703 13.8088 13.8098 13.6963 13.8849C13.5839 13.96 13.4517 14.0001 13.3165 14.0001Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1881_5284">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
</svg>

              </button>
              <div id="vsscript_194592_292305"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

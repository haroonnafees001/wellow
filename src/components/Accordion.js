"use client";

import { useState } from 'react';

const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <div className={`my-10 p-8 rounded-[18px] shadow-[0_17px_16px_-9px_#e6e6e6] ${isOpen ? 'border-2 border-purple-800' : '' } `}>
    <button
      className="w-full flex justify-between items-center focus:outline-none"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls={`accordion-content-${title}`}
      id={`accordion-header-${title}`}
    >
      <span className="text-lg font-bold">{title}</span>
    <div 
    className={`w-[60px] h-[60px] transition-transform duration-300  text-purple-800 rounded-full shadow-md flex justify-center align-center ${
        isOpen ? 'transform rotate-180 bg-purple-800 text-white' : 'bg-white'
      }`}
      > 
      <svg
        className={` w-[20px] ${
        isOpen ? 'text-white' : 'text-purple'
      }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
      
      </div>
      
    </button>
    <div
      id={`accordion-content-${title}`}
      role="region"
      aria-labelledby={`accordion-header-${title}`}
      className={`overflow-hidden transition-[max-height] duration-300 ${
        isOpen ? 'max-h-40' : 'max-h-0'
      }`}
    >
      <p className="p-0 text-[#6F6C90]">{children}</p>
    </div>
  </div>
);

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full ">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;

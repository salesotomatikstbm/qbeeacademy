import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full items-center py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
      >
        <span className="font-medium text-left">{title}</span>
        <svg
          className={`w-4 h-4 transform transition-transform duration-200 ${
            accordionOpen ? "rotate-90" : "rotate-0"
          }`}
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="M10 12c-.2 0-.4-.1-.6-.3l-5-5c-.3-.3-.3-.7 0-1 .3-.3.7-.3 1 0l4.3 4.3 4.3-4.3c.3-.3.7-.3 1 0s.3.7 0 1l-5 5c-.2.2-.4.3-.6.3z"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen ? "max-h-36" : "max-h-0"
        }`}
      >
        <div className="p-4 bg-white rounded-lg shadow-md text-left">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;

import React, { useState } from 'react';
import cal from '../../assets/cal.svg';
import out from '../../assets/outcome.svg';

const CurriculumSection = () => {
  // State to manage which button is active
  const [activeButton, setActiveButton] = useState('beginner'); // Default to 'beginner'

  // Content for the different batches
  const content = {
    beginner: {
      title: 'Java Full stack developer',
      topics: ['Basics', 'Advanced'],
      duration: '6 months',
      outcomes: ['Outcome 1', 'Outcome 2', 'Outcome 3'],
      usps: ['USP 1', 'USP 2', 'USP 3'],
    },
    advanced: {
      title: 'Advanced Java Developer',
      topics: ['Advanced Topics', 'Specialization'],
      duration: '8 months',
      outcomes: ['Advanced Outcome 1', 'Advanced Outcome 2', 'Advanced Outcome 3'],
      usps: ['Advanced USP 1', 'Advanced USP 2', 'Advanced USP 3'],
    },
  };

  // Function to handle button click and update activeButton state
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div id="curriculum_sec" className="px-6 py-14 md:px-10 md:py-12 lg:py-16">
      <div className="max-w-[1160px] mx-auto flex flex-col gap-6">
        <p className="mb-2 text-center text-[28px] md:text-[32px] lg:text-[36px] text-dark-blue max-w-[688px]">
          <span className="font-bold text-light-blue">Structured Curriculum to help you</span> in Problem Solving &amp; System Design
        </p>
        <div className="flex items-center justify-center md:justify-start gap-4">
          <button
            className={`flex items-center justify-center py-3 w-[151px] md:w-full gap-[1ch] rounded-lg px-8 border border-solid border-dark-blue shadow-[1px 1px 8px 0 rgba(0,0,0,0.15)] ${
              activeButton === 'beginner' ? 'bg-blue-500 text-white' : 'bg-white text-dark-blue'
            }`}
            onClick={() => handleButtonClick('beginner')}
          >
            <p className="text-lg font-semibold">Beginner</p>
            <p className="hidden md:flex text-lg font-semibold">Batch</p>
          </button>
          <button
            className={`flex items-center justify-center py-3 w-[151px] md:w-full gap-[1ch] rounded-lg px-8 border border-solid border-dark-blue shadow-[1px 1px 8px 0 rgba(0,0,0,0.15)] ${
              activeButton === 'advanced' ? 'bg-blue-500 text-white' : 'bg-white text-dark-blue'
            }`}
            onClick={() => handleButtonClick('advanced')}
          >
            <p className="text-lg font-semibold">Advanced</p>
            <p className="hidden md:flex text-lg">Batch</p>
          </button>
        </div>

        {/* Mobile view content */}
        <div className="flex flex-col gap-4 md:hidden">
          <p className="font-bold text-lg text-center text-dark-blue">{content[activeButton].title}</p>
          <ul className="flex flex-col gap-1">
            {content[activeButton].topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>

        {/* Desktop view content */}
        <div className="hidden md:flex md:justify-start md:items-start gap-6">
          <div className="flex flex-col items-start w-[284px] gap-2">
            <p className="font-bold text-lg text-start text-dark-blue">{content[activeButton].title}</p>
            <ul className="flex flex-col gap-1">
              {content[activeButton].topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
          <div className="py-4 px-6 md:h-[556px] w-full overflow-auto gap-4 rounded-[5px] border-[0.5px] border-solid border-[#878787]">
            <p className="font-bold text-lg text-start text-dark-blue">Content Area</p>
            <hr className="border-gray-300 w-full" />
            <div className="flex justify-start items-center gap-2">
              <div className="w-6 h-6">
                <img alt="calendar" loading="lazy" width="24" height="24" decoding="async" src={cal} />
              </div>
              <p className="text-[#5E5A7A] text-base font-semibold text-start">Duration:</p>
              <p className="text-base">{content[activeButton].duration}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-base text-dark-blue text-start">Topics that will be covered:</p>
              <ul className="flex flex-col flex-wrap max-h-[395px] gap-1">
                {content[activeButton].topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
            <hr className="border-gray-300 w-full" />
            <div className="flex justify-start items-center gap-2">
              <div className="h-6 w-6">
                <img alt="outcomes" loading="lazy" width="19" height="22" decoding="async" src={out} />
              </div>
              <p className="text-dark-blue text-base font-semibold text-start">Outcomes:</p>
            </div>
            <ul className="flex flex-col items-start gap-2">
              {content[activeButton].outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
            <hr className="border-gray-300 w-full" />
            <div className="flex justify-start items-center gap-2">
              <div className="h-6 w-6">
                <img alt="USPs" loading="lazy" width="19" height="22" decoding="async" src={out} />
              </div>
              <p className="text-dark-blue text-base font-semibold text-start">USPs of our Delivery:</p>
            </div>
            <ul className="flex flex-col items-start gap-2">
              {content[activeButton].usps.map((usp, index) => (
                <li key={index}>{usp}</li>
              ))}
            </ul>
          </div>
        </div>

        <button className="max-w-[402px] mt-2 w-full py-[18px] flex items-center justify-center font-semibold text-base text-light-blue text-center bg-blue-500 border-2 border-solid border-blue-500 rounded-lg">
          Download Brochure
        </button>
      </div>
    </div>
  );
};

export default CurriculumSection;

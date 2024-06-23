import React from 'react';

import planeIcon from '../../assets/send.svg'; 
import placement from '../../assets/main.png';
const Placement = () => {
  return (
    <div id="placements_sec" className="px-6 py-14 bg-[#F9F9F9] md:px-10 md:py-16 lg:pb-12 mt-12">
      <div className="lg:bg-no-repeat lg:bg-center-top-240px lg:bg-bg-placement flex flex-col justify-center items-center max-w-[1160px] m-auto">
        <div>
          <p className="text-[28px] font-bold text-center text-[#202658] md:text-[32px] lg:font-bold leading-[39px] sm:leading-[49px]">
            Our <span className="text-light-blue">3-Step Approach</span> towards Providing
          </p>
          <p className="text-[28px] font-bold text-center text-[#202658] md:text-[32px] lg:font-bold leading-[39px] sm:leading-[49px]">
            Recruitment Opportunities
          </p>
        </div>
        <div className="flex flex-col lg:flex-row-reverse lg:justify-between lg:gap-16 lg:items-stretch lg:pb-[61px] lg:bg-no-repeat lg:bg-right-bottom lg:bg-bg-placement">
          <div className="w-full mx-auto py-[38px] lg:px-10 my-8 bg-white shadow-[7px_8px_0_0_#DFDFDF] border rounded border-[#AEAEAE] md:hidden lg:flex lg:self-stretch lg:mb-0">
            <img className="w-[508px] mx-auto lg:py-[120px]" src={placement} alt="placement_screen" />
          </div>
          <div className="flex flex-col w-full justify-center items-stretch gap-8 md:flex-row md:justify-between md:gap-[25px] md:mt-8 lg:flex-col lg:items-stretch lg:gap-6">
            <div className="p-8 border basis-1/3 border-solid border-[#345ABC] bg-white rounded shadow-[7px_8px_0_0_rgb(166,183,228,1)] md:w-7/12 lg:w-full lg:pl-6 lg:py-4">
              <div className="text-2xl text-[#345ABC] font-bold pb-2">Profile Building</div>
              <div className="mt-2">
                <div className="flex gap-4 my-2 items-baseline">
                  <img className="h-4 w-4" src={planeIcon} alt="bulletpoint" />
                  <div className="text-[#202658] text-base">Resume Creation</div>
                </div>
                <div className="flex gap-4 my-2 items-baseline">
                  <img className="h-4 w-4" src={planeIcon} alt="bulletpoint" />
                  <div className="text-[#202658] text-base">LinkedIn Profile Optimization</div>
                </div>
                <div className="flex gap-4 my-2 items-baseline">
                  <img className="h-4 w-4" src={planeIcon} alt="bulletpoint" />
                  <div className="text-[#202658] text-base">Profile creation on other platforms</div>
                </div>
              </div>
            </div>
            <div className="p-8 border basis-1/3 border-solid border-[#BC6D34] bg-white rounded shadow-[7px_8px_0_0_rgba(240,197,160,1.00)] lg:pl-6 lg:py-4">
              <div className="text-2xl text-[#BC6D34] font-bold pb-2">Mock Interviews</div>
              <div className="mt-2">
                <div className="flex gap-4 my-2 items-baseline">
                  <img className="h-4 w-4" src={planeIcon} alt="bulletpoint" />
                  <div className="text-[#202658] text-base">Understanding your weak points</div>
                </div>
                <div className="flex gap-4 my-2 items-baseline">
                  <img className="h-4 w-4" src={planeIcon} alt="bulletpoint" />
                  <div className="text-[#202658] text-base">Have Problem solving & System design interviews</div>
                </div>
                <div className="flex gap-4 my-2 items-baseline">
                  <img className="h-4 w-4" src={planeIcon} alt="bulletpoint" />
                  <div className="text-[#202658] text-base">On-demand company-specific interviews</div>
                </div>
              </div>
            </div>
            <div className="p-8 border basis-1/3 border-solid border-[#5B0A8C] bg-white rounded shadow-[7px_8px_0_0_rgba(108,10,154,0.40)] md:w-6/12 lg:w-full lg:pl-6 lg:py-4">
              <div className="text-2xl text-[#5B0A8C] font-bold pb-2">Right Opportunities</div>
              <div className="mt-2">
                <div className="flex gap-4 my-2 items-baseline">
                  <img className="h-4 w-4" src={planeIcon} alt="bulletpoint" />
                  <div className="text-[#202658] text-base">Opportunities in 100+ Partner Tech Companies</div>
                </div>
                <div className="flex gap-4 my-2 items-baseline">
                  <img className="h-4 w-4" src={planeIcon} alt="bulletpoint" />
                  <div className="text-[#202658] text-base">Referral to almost all top product companies</div>
                </div>
                <div className="flex gap-4 my-2 items-baseline">
                  <img className="h-4 w-4" src={planeIcon} alt="bulletpoint" />
                  <div className="text-[#202658] text-base">Sharing hiring opportunities of different companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placement;

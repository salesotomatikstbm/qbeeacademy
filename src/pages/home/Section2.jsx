import React from 'react';

const Section2 = () => {
  return (
    <div id="program_sec" className="overflow-hidden relative max-w-[1160px] m-auto">
      <div className="md:py-16 py-14 md:px-2 px-6">
        {/* Title */}
        <p className="font-semibold text-[28px] text-dark-blue text-center md:font-bold">Our Highly Rated</p>
        {/* Subtitle */}
        <p className="font-semibold text-[28px] text-[#334BEF] text-center mb-[32px] md:font-bold">Outcome-based Programme</p>
        
        {/* First set of cards */}
        <div className="md:mt-8 flex flex-col">
          <div className="flex justify-center m-auto items-center cursor-default px-8 py-2 rounded-[32px] md:w-[400px] h-[44px] bg-[#334bef14]">
            <div className="font-medium text-[#334bef] md:text-[20px] text-[16px]">For Software Development Roles</div>
          </div>

          {/* Cards for Software Development Roles */}
          <div className="flex xl:hidden justify-center md:gap-x-[32px] mt-8 gap-y-[32px]">
            {/* Transformer Card */}
            <Card 
              title="Transformer" 
              subtitle="For Up to 6 Years of Experience"
              gradientFrom="rgba(255,151,79,1)"
              gradientTo="rgba(221,97,6,1)"
              link="transformer.html"
              benefits={[
                "Command over Problem-Solving in DS & Algo",
                "Software Designing skills including LLD & HLD",
                "Industry-relevant projects"
              ]}
            />
            {/* Evolve Card */}
            <Card 
              title="Evolve" 
              subtitle="For 7+ Years of Experience"
              gradientFrom="rgba(74,72,85,1)"
              gradientTo="rgba(34,32,47,1)"
              link="evolve.html"
              benefits={[
                "Command over Problem-Solving in DS & Algo",
                "Proficiency in System Design (LLD + HLD)",
                "Leadership Skills & Industry-Relevant Projects"
              ]}
            />
            {/* Accelerator Card */}
            <Card 
              title="Accelerator" 
              subtitle="For College Students"
              gradientFrom="rgba(29,45,176,1)"
              gradientTo="rgba(12,19,74,1)"
              link="accelerator.html"
              benefits={[
                "Command over Problem-Solving in DS & Algo",
                "Computer Science Fundamentals",
                "Industry-relevant projects"
              ]}
            />
          </div>
        </div>

        {/* Second set of cards (hidden for XL screens) */}
        <div className="xl:flex xl:flex-row flex-col hidden justify-center md:gap-x-[32px] mt-8 gap-y-[32px]">
          {/* Transformer Card (XL) */}
          <Card 
            title="Transformer" 
            subtitle="For Up to 6 Years of Experience"
            gradientFrom="rgba(255,151,79,1)"
            gradientTo="rgba(221,97,6,1)"
            link="transformer.html"
            benefits={[
              "Command over Problem-Solving in DS & Algo",
              "Software Designing skills including LLD & HLD",
              "Industry-relevant projects"
            ]}
          />
          {/* Evolve Card (XL) */}
          <Card 
            title="Evolve" 
            subtitle="For 7+ Years of Experience"
            gradientFrom="rgba(74,72,85,1)"
            gradientTo="rgba(34,32,47,1)"
            link="evolve.html"
            benefits={[
              "Command over Problem-Solving in DS & Algo",
              "Proficiency in System Design (LLD + HLD)",
              "Leadership Skills & Industry-Relevant Projects"
            ]}
          />
          {/* Accelerator Card (XL) */}
          <Card 
            title="Accelerator" 
            subtitle="For College Students"
            gradientFrom="rgba(29,45,176,1)"
            gradientTo="rgba(12,19,74,1)"
            link="accelerator.html"
            benefits={[
              "Command over Problem-Solving in DS & Algo",
              "Computer Science Fundamentals",
              "Industry-relevant projects"
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, gradientFrom, gradientTo, link, benefits }) => {
  return (
    <div className={`rounded-md shadow-md hover:shadow-[0px_2px_14px_0px_rgba(${gradientTo},0.30)]`}>
      <div className={`bg-gradient-to-r from-[${gradientFrom}] to-[${gradientTo}] w-full py-4 rounded-t-md`}>
        <p className="text-white text-[28px] px-4 font-semibold">{title}</p>
        <p className="text-white text-sm px-4 font-[500]">{subtitle}</p>
      </div>
      <ul className="mt-6 px-4">
        <li className="text-[16px] text-[#1F2C97]">What you will learn?</li>
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-700 mt-4">
            <img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />
            {benefit}
          </li>
        ))}
      </ul>
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <button className="mt-14 md:mb-6 mb-6 md:px-28 sm:px-20 px-[100px] flex justify-center border-[0.5px] hover:border-[2px] border-solid border-[#202658] text-[#202658] font-normal hover:font-semibold py-3 mx-auto rounded-sm">Learn More</button>
      </a>
    </div>
  );
};

export default Section2;

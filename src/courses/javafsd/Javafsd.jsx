import React, { useState } from 'react';

import downlode from '../../assets/downlode.svg';
import average from '../../assets/Average-package.svg';
import salary from '../../assets/Salery_Hike.svg';
import Highest from '../../assets/Highest-package.svg';
import Java from '../../assets/Java.png';
import one from '../../assets/one.svg';
import plus from '../../assets/plus.svg';
import Dream from '../../assets/Dream.png';
import CurriculumSection from './CurriculumSection';
import ProjectsSection from './ProjectsSection';

const Javafsd = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleExpand = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div>
      <div className="px-6 pt-14 mt-24 pb-[124px] bg-gradient-to-br from-[#100D25] via-[#100D25] to-[#190B69] sm:px-10 sm:pt-12 sm:pb-[160px] min-[1200px]:px-[140px] min-[1200px]:pt-16 min-[1200px]:pb-[174px]">
        <div className="relative max-w-[1160px] m-auto w-full flex flex-col justify-center items-center gap-8 sm:flex-row">
          <div className="text-white flex flex-col justify-center items-center sm:items-start sm:gap-0 min-[1200px]:max-w-[632px]">
            <p className="text-[32px] font-[500] sm:font-normal min-[1200px]:text-[40px]">Upskill & Ace</p>
            <p className="text-[40px] text-center font-[800] sm:text-[48px] sm:text-start min-[1200px]:leading-[87px] min-[1200px]:text-[64px]">
              Your Tech Career
            </p>
            <p className="text-lg mt-4 font-normal max-[768px]:max-w-[400px] sm:w-[464px] sm:text-start sm:text-xl min-[1200px]:text-xl min-[1200px]:w-[560px]">
              6-months live structured program designed by industry experts to upskill & switch to top product companies.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 mt-7 mb-3 sm:flex-row sm:mb-4 sm:mt-8 min-[1200px]:mt-8">
              <button className="bg-[#fff] rounded-sm flex justify-center items-center border-solid border-2 border-white text-dark-blue font-bold text-lg py-4 px-16 sm:px-8 min-[1200px]:px-16">
                <p className="text-lg font-semibold text-black">Apply Now</p>
              </button>
              <button className="flex justify-center items-center gap-1 p-4 rounded border-solid border-2 border-white shadow-[2px_2px_14px_0_rgba(19,113,255,0.20)]">
                <div className="h-6 w-6">
                  <img alt="download" loading="lazy" width="24" height="24" decoding="async" src={downlode} />
                </div>
                <p className="text-lg font-semibold text-[#fff]">Download Syllabus</p>
              </button>
            </div>
            <p className="text-base">Next batch starts in <span className="font-bold">July</span></p>
          </div>
          <div className="relative max-w-[347px] max-h-[198px] sm:w-full align-middle flex justify-center items-center sm:h-full sm:max-w-[439px] sm:max-h-[260px] min-[1200px]:max-h-full min-[1200px]:max-w-full mx-auto">
            <button className="absolute h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] lg:h-[70px] lg:w-[70px]">
              <div style={{ transform: "scale(10)" }}>
                <img
                  alt="Java"
                  loading="lazy"
                  width={500}
                  height={500}
                  decoding="async"
                  src={Java}
                  style={{ display: "block", width: "100%", height: "100%" }}
                />
              </div>
            </button>
          </div>
          <div className="absolute -bottom-[178px] sm:-bottom-[224px] min-[1200px]:-bottom-[238px] z-10 bg-gradient-to-r from-[#fff] via-[#fff] to-[#fff] w-full h-[100px] sm:h-[132px] rounded shadow-[0_4px_4px_0_rgba(174,201,226,0.29)] text-[#1F2C97] flex justify-evenly items-center text-center">
            <div className="relative">
              <p className="text-lg sm:text-2xl font-bold">12 LPA</p>
              <p className="text-[12px] sm:text-lg">Average Package</p>
              <div className="absolute -top-[70px] sm:-top-[83px] left-4 sm:left-8 h-[65px] w-[65px] sm:h-[78px] sm:w-[78px]">
                <img
                  alt="average package"
                  loading="lazy"
                  width="78"
                  height="78"
                  decoding="async"
                  src={average}
                />
              </div>
            </div>
            <div className="relative">
              <p className="text-lg sm:text-2xl font-bold">100%</p>
              <p className="text-[12px] sm:text-lg">Salary Hike</p>
              <div className="absolute -top-[70px] sm:-top-[83px] left-0 sm:left-[7px] h-[65px] w-[65px] sm:h-[78px] sm:w-[78px]">
                <img
                  alt="salary hike"
                  loading="lazy"
                  width="78"
                  height="78"
                  decoding="async"
                  src={salary}
                />
              </div>
            </div>
            <div className="relative">
              <p className="text-lg sm:text-2xl font-bold">48 LPA</p>
              <p className="text-[12px] sm:text-lg">Highest Package</p>
              <div className="absolute -top-[70px] sm:-top-[83px] left-4 sm:left-8 h-[65px] w-[65px] sm:h-[78px] sm:w-[78px]">
                <img
                  alt="highest package"
                  loading="lazy"
                  width="78"
                  height="78"
                  decoding="async"
                  src={Highest}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 pt-[120px] pb-14 md:pb-12 lg:pb-16 bg-[#fff]">
        <div className="max-w-[1160px] m-auto w-full flex flex-col justify-center items-center gap-8 lg:gap-10">
          <p className="text-[28px] text-light-blue font-bold text-center max-w-[300px] md:max-w-full md:text-[32px] lg:text-[36px]">
            From This Program <span className="font-normal text-dark-blue">You Will Gain!</span>
          </p>
          <div className="flex flex-col w-full md:flex-row justify-center items-center md:items-stretch gap-4 md:gap-5 lg:gap-3">
            <div className="border-x-[0.5px] border-y-[0.5px] relative w-full max-w-[380px] border-solid border-[#C8C8C8] rounded shadow-[0_4px_4px_0_rgba(174,201,226,0.29)] flex justify-center items-center py-16">
              <p className="text-[#4D5179] text-xl leading-[30px] text-center max-w-[253px] lg:max-w-[253px] md:max-w-[231px]">
                Solid command on <span className="font-bold">Problem Solving Skills in DS & Algo</span>
              </p>
              <div className="absolute h-[63px] w-[42px] top-0 left-4">
                <img
                  alt="tag"
                  loading="lazy"
                  width="42"
                  height="63"
                  decoding="async"
                  src={one}
                />
                <p className="absolute top-0 left-[8px] text-[35px] text-white font-semibold">1</p>
              </div>
            </div>
            <div className="border-x-[0.5px] border-y-[0.5px] relative w-full max-w-[380px] border-solid border-[#C8C8C8] rounded shadow-[0_4px_4px_0_rgba(174,201,226,0.29)] flex justify-center items-center py-16">
              <p className="text-[#4D5179] text-xl leading-[30px] text-center max-w-[253px] lg:max-w-[253px] md:max-w-[231px]">
                In-depth knowledge of <span className="font-bold">Java/J2EE & Spring Boot</span>
              </p>
              <div className="absolute h-[63px] w-[42px] top-0 left-4">
                <img
                  alt="tag"
                  loading="lazy"
                  width="42"
                  height="63"
                  decoding="async"
                  src={one}
                />
                <p className="absolute top-0 left-[8px] text-[35px] text-white font-semibold">2</p>
              </div>
            </div>
            <div className="border-x-[0.5px] border-y-[0.5px] relative w-full max-w-[380px] border-solid border-[#C8C8C8] rounded shadow-[0_4px_4px_0_rgba(174,201,226,0.29)] flex justify-center items-center py-16">
              <p className="text-[#4D5179] text-xl leading-[30px] text-center max-w-[253px] lg:max-w-[253px] md:max-w-[231px]">
                <span className="font-bold">Advanced Spring & Hibernate</span> knowledge
              </p>
              <div className="absolute h-[63px] w-[42px] top-0 left-4">
                <img
                  alt="tag"
                  loading="lazy"
                  width="42"
                  height="63"
                  decoding="async"
                  src={one}
                />
                <p className="absolute top-0 left-[8px] text-[35px] text-white font-semibold">3</p>
              </div>
            </div>
            <div className="border-x-[0.5px] border-y-[0.5px] relative w-full max-w-[380px] border-solid border-[#C8C8C8] rounded shadow-[0_4px_4px_0_rgba(174,201,226,0.29)] flex justify-center items-center py-16">
              <p className="text-[#4D5179] text-xl leading-[30px] text-center max-w-[253px] lg:max-w-[253px] md:max-w-[231px]">
                Exposure to <span className="font-bold">Microservices Architecture</span>
              </p>
              <div className="absolute h-[63px] w-[42px] top-0 left-4">
                <img
                  alt="tag"
                  loading="lazy"
                  width="42"
                  height="63"
                  decoding="async"
                  src={one}
                />
                <p className="absolute top-0 left-[8px] text-[35px] text-white font-semibold">4</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CurriculumSection toggleExpand={toggleExpand} expandedSection={expandedSection} />
      <ProjectsSection />
      
      <div className="mt-20 bg-gradient-to-br from-[#100D25] via-[#100D25] to-[#190B69] py-12 sm:py-14 text-[#fff]">
        <div className="max-w-[1160px] m-auto flex flex-col justify-center items-center gap-4 sm:flex-row sm:gap-6 lg:gap-8">
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-[24px] font-bold">Got Queries?</p>
            <p className="text-lg font-normal text-center max-w-[256px] sm:text-xl sm:max-w-[400px]">
              Feel free to connect with our expert counsellors who will guide you with career path, course, and future opportunities.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <button className="bg-[#fff] rounded-sm flex justify-center items-center border-solid border-2 border-white text-dark-blue font-bold text-lg py-4 px-16 sm:px-8 min-[1200px]:px-16">
              <p className="text-lg font-semibold text-black">Book a Call</p>
            </button>
            <button className="flex justify-center items-center gap-1 p-4 rounded border-solid border-2 border-white shadow-[2px_2px_14px_0_rgba(19,113,255,0.20)]">
              <div className="h-6 w-6">
                <img alt="download" loading="lazy" width="24" height="24" decoding="async" src={downlode} />
              </div>
              <p className="text-lg font-semibold text-[#fff]">Download Course Details</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Javafsd;

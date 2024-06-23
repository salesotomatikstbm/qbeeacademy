import React from 'react';
import headerBlob from '../assets/robotics.png';
import LandingSection from './LandingSection';

const Head = () => {
  return (
    <div className="bg-purple-800 p-4 w-full mx-auto h-300">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-white text-6xl lg:text-5xl mb-6">
            Empower your child's future <b>with robotics</b>
          </h1>
          <p className="text-white text-2xl mb-8">
            Let your child tinker, innovate, and experiment in our next-gen robotics & IoT program, paired with top tutors.
          </p>
         <LandingSection />
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
          <img
            src={headerBlob}
            alt="Tech Illustration"
            className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;

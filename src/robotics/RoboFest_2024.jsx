import React from 'react';
import Robo_Head_Content from './Robo_Head_Content';
import event from '../assets/event.png';

const RoboFest2024 = () => {
  return (
    <div className="px-6 py-14 md:px-10 md:py-16 lg:pb-12 bg-gray-100">

      <Robo_Head_Content />

      <div className="flex flex-col lg:flex-row lg:gap-16">
        <div className="flex-1 p-8 rounded-lg shadow-md mb-8 lg:mb-0 lg:order-2 highlight-section hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center bg-white relative">
          <h3 className="text-3xl text-[#345ABC] font-bold mb-6 text-center">Explore Robotics & Coding Courses to Win Prizes!</h3>
          <img
            src={event}
            alt="Tech Illustration"
            className="w-full h-full object-contain z-20"
          />
        </div>
        <div className="flex-1 lg:order-1">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 flex flex-col h-full">
            <h3 className="text-3xl text-[#345ABC] font-bold mb-6 text-center">Event Highlights</h3>
            <div className="space-y-6 flex-grow">
              <div className="flex items-start gap-4 highlight-section flex-grow">
                <div>
                  <h4 className="text-[#202658] text-xl font-semibold text-blue-600 font-bold">Bot Building Workshop</h4>
                  <p className="text-[#202658]">Engage in an interactive workshop where participants can build their own robots and learn the basics of robotics.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 highlight-section flex-grow">
                <div>
                  <h4 className="text-[#202658] text-xl font-semibold text-blue-600 font-bold">RoboRace Challenge Game</h4>
                  <p className="text-[#202658]">Participate in an exciting RoboRace Challenge and showcase your robot's speed and agility.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 highlight-section flex-grow">
                <div>
                  <h4 className="text-[#202658] text-xl font-semibold text-blue-600 font-bold">Bot Showcase and Demonstrations</h4>
                  <p className="text-[#202658]">See a variety of robots on display, each demonstrating different capabilities and innovations.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 highlight-section flex-grow">
                <div>
                  <h4 className="text-[#202658] text-xl font-semibold text-blue-600 font-bold">Expert Talk on the Future of Robotics Education</h4>
                  <p className="text-[#202658]">Gain insights from industry experts on the future of robotics education and the skills needed to excel in this field.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 highlight-section flex-grow">
                <div>
                  <h4 className="text-[#202658] text-xl font-semibold text-blue-600 font-bold">Overview of Our Robotics Courses</h4>
                  <p className="text-[#202658]">Learn about our comprehensive robotics courses designed to equip students with the knowledge and skills required in the robotics industry.</p>
                </div>
              </div>
            </div>
            <div className="text-center py-8">
              <a
                href="https://pages.razorpay.com/pl_OOcuhQQsCTdtaA/view"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register RoboFest 2024
                <i className="fa fa-chevron-right ml-2" aria-hidden="false"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RoboFest2024;

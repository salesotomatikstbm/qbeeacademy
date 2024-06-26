import React from 'react';
import Robo_Head_Content from './Robo_Head_Content';


const RoboFest2024 = () => {
  return (
    <div className="px-6 py-14 md:px-10 md:py-16 lg:pb-12 bg-gray-100" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      <Robo_Head_Content />

      <div className="flex flex-col lg:flex-row lg:gap-16">
        <div className="flex-1 p-8 rounded-lg shadow-md mb-8 lg:mb-0 lg:order-2 highlight-section hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center bg-white relative">
          <h3 className="text-3xl text-blue-800 font-bold mb-6 text-center">Explore Robotics & Coding Courses</h3>
          <div className="relative w-full overflow-hidden rounded-lg shadow-md" style={{ paddingTop: '141.8919%' }}>
            <iframe
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full border-none"
              src="https://www.canva.com/design/DAGIL6BuHS4/0QQsDTpKhUHrNQCEjo2KCQ/view?embed"
              allowFullScreen
              title="Canva Design"
            ></iframe>
          </div>
        </div>
        <div className="flex-1 lg:order-1">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 flex flex-col h-full">
            <h3 className="text-3xl text-blue-800 font-bold mb-6 text-center">Event Highlights</h3>
            <div className="space-y-6 flex-grow">
              <div className="flex items-start gap-4 highlight-section flex-grow">
                <div>
                  <h4 className="text-xl text-blue-600 font-bold">Bot Building Workshop</h4>
                  <ul className="list-disc list-inside text-lg pl-4 text-justify"> {/* Added text-justify class */}
                    <li>Build your own robots from scratch.</li>
                    <li>Learn the basics of robotics: <span className="ml-4">components, design principles, and programming.</span></li>
                    <li>Hands-on session suitable for all skill levels.</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-4 highlight-section flex-grow">
                <div>
                  <h4 className="text-xl text-blue-600 font-bold">RoboRace Challenge Game</h4>
                  <ul className="list-disc list-inside text-lg pl-4 text-justify"> {/* Added text-justify class */}
                    <li>Compete to showcase your robot's speed and agility.</li>
                    <li>Navigate through a challenging course with obstacles.</li>
                    <li>Test your engineering and teamwork abilities.</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-4 highlight-section flex-grow">
                <div>
                  <h4 className="text-xl text-blue-600 font-bold">Bot Showcase and Demonstrations</h4>
                  <ul className="list-disc list-inside text-lg pl-4 text-justify"> {/* Added text-justify class */}
                    <li>See a variety of robots on display.</li>
                    <li>Discover unique capabilities and innovations.</li>
                    <li>Learn the science behind each exhibit from experts.</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-4 highlight-section flex-grow">
                <div>
                  <h4 className="text-xl text-blue-600 font-bold">Expert Talk on the Future of Robotics Education</h4>
                  <ul className="list-disc list-inside text-lg pl-4 text-justify"> {/* Added text-justify class */}
                    <li>Insights from leading industry experts.</li>
                    <li>Learn about emerging trends and essential skills.</li>
                    <li>Understand how robotics is transforming industries.</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-4 highlight-section flex-grow">
                <div>
                  <h4 className="text-xl text-blue-600 font-bold">Overview of Our Robotics Courses</h4>
                  <ul className="list-disc list-inside text-lg pl-4 text-justify"> {/* Added text-justify class */}
                    <li>Discover our comprehensive robotics courses.</li>
                    <li>Courses cover basic programming to advanced robotics engineering.</li>
                    <li>Prepare students with the knowledge and skills for the robotics industry.</li>
                  </ul>
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

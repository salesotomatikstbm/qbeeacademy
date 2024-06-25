import React, { useState, useEffect } from 'react';
import tabletImage from '../assets/tabletImage.png'; 
import smartwatchImage from '../assets/smartwatchImage.png'; 
import bootcampImage from '../assets/bootcampImage.png'; 
import competitionImage from '../assets/competitionImage.png'; 

const BonusesSection = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2024-07-10T23:59:59`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="mx-3 md:mx-auto max-w-screen-lg">
      
      <section className="bg-white p-6">
      <p className="text-4xl font-bold text-[#202658] md:text-5xl lg:text-5xl mb-2 text-blue-600 text-center">
        Gift for Spot Admission
        </p>
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/2 p-4">
            <div className=" p-6 rounded-lg text-center">
              <h2 className="text-xl font-bold">
                Choose 6 Levels of Robotics Courses
              </h2>
              <div className="my-4">
                <img
                  className="w-32 h-32 mx-auto" // Increased width and height
                  src={tabletImage}
                  alt="Tablet"
                />
              </div>
              <h3 className="text-lg font-semibold">
                Includes a free tablet for each participant
              </h3>
              <p className="mt-2 text-md font-medium">Worth Rs 5,500</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className=" p-6 rounded-lg text-center">
              <h2 className="text-xl font-bold">
                Choose 3 Levels of Robotics Courses
              </h2>
              <div className="my-4">
                <img
                  className="w-32 h-32 mx-auto" // Increased width and height
                  src={smartwatchImage}
                  alt="Smartwatch"
                />
              </div>
              <h3 className="text-lg font-semibold">
                Includes a free smartwatch for each participant
              </h3>
              <p className="mt-2 text-md font-medium">Worth Rs 3,500</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white p-6">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/2 p-4">
            <div className=" p-6 rounded-lg text-center">
              <h2 className="text-xl font-bold">
                Choose 2 Levels of Robotics Courses
              </h2>
              <div className="my-4">
                <img
                  className="w-32 h-32 mx-auto" // Increased width and height
                  src={competitionImage}
                  alt="Bootcamp"
                />
              </div>
              <h3 className="text-lg font-semibold">
                Enhance your skills with our complimentary bootcamp
              </h3>
              <p className="mt-2 text-md font-medium">Worth Rs 2,000</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className=" p-6 rounded-lg text-center">
              <h2 className="text-xl font-bold">
                Choose 1 Levels of Robotics Courses
              </h2>
              <div className="my-4">
                <img
                  className="w-32 h-32 mx-auto" // Increased width and height
                  src={bootcampImage}
                  alt="Competition Participation"
                />
              </div>
              <h3 className="text-lg font-semibold">
                Enhance your skills with our Complimentary Competition Participation
              </h3>
              <p className="mt-2 text-md font-medium">Worth Rs 1,000</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#202658] md:text-5xl lg:text-5xl mb-2 text-blue-600">
          Register before 10th July 2024
        </h2>
        <p className="font-bold text-[#202658] md:text-4xl lg:text-4xl mb-2">
          To Unlock All Bonuses worth Rs 12,000
        </p>
        <div className="font-bold text-[#202658] md:text-2xl lg:text-2xl mb-2 text-blue-600">
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
        <a
          href="https://pages.razorpay.com/pl_OOcuhQQsCTdtaA/view"
          className="inline-block bg-green-500 text-white py-3 px-6 rounded-lg text-lg font-medium text-center md:text-left hover:bg-green-600 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register RoboFest 2024
          <i className="fa fa-chevron-right ml-2" aria-hidden="true"></i>
        </a>
       
      </div>


    </div>
  );
};

export default BonusesSection;

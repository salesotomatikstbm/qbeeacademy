import React, { useState, useEffect } from 'react';

const EventDetails = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2024-07-14T23:59:59`) - +new Date();
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
      <div key={interval} className="text-center">
        <div className="text-2xl md:text-4xl font-bold">{timeLeft[interval]}</div>
        <div className="text-sm md:text-lg">{interval.charAt(0).toUpperCase() + interval.slice(1)}</div>
      </div>
    );
  });

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-500">REGISTER BEFORE</h2>
      </div>

      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-md">
          <ul className="flex justify-around">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </ul>
        </div>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          &amp; get <b>FREE BONUSES</b> worth&nbsp;<b>INR 36000</b>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center lg:justify-end mb-6">
        <div className="w-full px-4 lg:w-1/2 lg:text-right">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl">
              <span className="text-gray-500 line-through mr-2 md:mr-4">₹399</span> ₹99
            </h2>
          </div>
        </div>
      </div>

      <div className="text-center">
        <a
          href="https://pages.razorpay.com/pl_OOcuhQQsCTdtaA/view"
          id="addtocartthree"
          className="inline-block bg-blue-500 text-white py-3 md:py-5 px-4 md:px-6 rounded-lg hover:bg-blue-600 text-lg md:text-2xl"
        >
          Register RoboFest 2024
          <i className="fa fa-chevron-right ml-2" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default EventDetails;

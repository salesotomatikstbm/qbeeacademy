import React, { useState, useEffect } from 'react';

const BonusesSection = () => {
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
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="mx-3 md:mx-auto max-w-screen-lg">
 
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#202658] md:text-5xl lg:text-5xl mb-2 text-blue-600">Register before midnight of 30 Jun 2024</h2>
          <p className=" font-bold text-[#202658] md:text-4xl lg:text-4xl mb-2 ">To Unlock All Bonuses worth Rs 14,500</p>
          <div className=" font-bold text-[#202658] md:text-2xl lg:text-2xl mb-2 text-blue-600 ">
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
 

      <section className="bg-white p-6">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h2 className="text-xl font-bold">Choose 6 Levels of Robotics Courses</h2>
              <div className="text-purple-500 my-4">
                <svg aria-hidden="true" className="w-12 h-12 mx-auto" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Includes a free tablet for each participant</h3>
              <p className="mt-2 text-md font-medium">Worth Rs 5,500</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h2 className="text-xl font-bold">Choose 3 Levels of Robotics Courses</h2>
              <div className="text-purple-500 my-4">
                <svg aria-hidden="true" className="w-12 h-12 mx-auto" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Includes a free smartwatch for each participant</h3>
              <p className="mt-2 text-md font-medium">Worth Rs 3,500</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white p-6">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h2 className="text-xl font-bold">Free Software Bootcamp</h2>
              <div className="text-purple-500 my-4">
                <svg aria-hidden="true" className="w-12 h-12 mx-auto" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Enhance your skills with our complimentary bootcamp</h3>
              <p className="mt-2 text-md font-medium">Worth Rs 5,500</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h2 className="text-xl font-bold">Bonus 4</h2>
              <div className="text-purple-500 my-4">
                <svg aria-hidden="true" className="w-12 h-12 mx-auto" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128,0a32,32,0,0,0,0,64h74.08l-26.72,48H122.94a80.07,80.07,0,0,0-71.06,44.61L3.22,256,51.88,355.39A80.07,80.07,0,0,0,122.94,400H389.06a80.07,80.07,0,0,0,71.06-44.61L444.12,256l48.66-99.39A80.07,80.07,0,0,0,517.06,144H463.64l-26.72-48H544a32,32,0,0,0,0-64ZM320,256A32,32,0,1,1,352,288,32,32,0,0,1,320,256Z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Premium Access to Advanced Data Analytics Tools</h3>
              <p className="mt-2 text-md font-medium">Worth Rs 4,000</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BonusesSection;

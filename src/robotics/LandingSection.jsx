import React from 'react';
import Oto from '../assets/Oto.png';

const LandingSection = () => {
  return (
    <div className="lg:col-span-7 md:col-span-7 p-6 bg-purple-800 flex flex-col md:flex-row items-center justify-between">
      <div className="partner-data mb-6 md:mb-0 md:mr-6">
        <p className="text-white text-center md:text-left">Officially Authorized Partner of</p>
        <img
          src={Oto}
          alt="Oto partner logo"
          loading="lazy"
          className="h-16 md:h-24 w-auto mx-auto md:mx-0"
        />
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
  );
};

export default LandingSection;

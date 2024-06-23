import React from 'react';
import Main_2 from '../../assets/Main_2.png'; 

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 mx-auto mt-20 h-full" style={{
      backgroundImage: "linear-gradient(to bottom right, #100D25, #100D25, #190B69)",
      color: "white", 
    }}>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:ml-12">
        <p className="text-center md:text-left text-white text-4xl font-medium tracking-wide md:text-5xl md:font-semibold lg:text-6xl lg:font-normal lg:leading-10">
          Upskill &amp; Grab your
        </p>
        <p className="whitespace-nowrap text-center md:text-left text-white text-4xl font-extrabold tracking-wider md:text-7xl lg:text-7xl lg:font-bold lg:leading-12">
          Dream Tech Offer
        </p>
        <p className="text-center md:text-left text-white max-w-prose tracking-normal leading-6 mt-4 mb-8 md:text-base lg:text-lg lg:leading-normal">
          Join India's leading platform dedicated to realizing professional dreams and fostering growth for businesses and educational institutions.
        </p>
        <div className="flex flex-col justify-center items-center gap-6 mb-8 md:flex-row md:justify-start md:mb-0">
          <a
            href="https://pages.razorpay.com/pl_OOcuhQQsCTdtaA/view"
            className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-green-600 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register RoboFest 2024
            <i className="fa fa-chevron-right ml-2" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 md:mr-12">
        <img src={Main_2} alt="Tech Illustration" className="w-full rounded-lg" />
      </div>
    </div>
  );
}

export default Home;

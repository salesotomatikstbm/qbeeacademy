import React from 'react';

const Banner = () => {
  return (
    <div className="section relative mt-8 mb-8">
      <div className="section-info">
        <div className="heading">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Software Development Services for Enterprise Applications
          </h1>
        </div>
        <div className="underline w-16 h-1 bg-blue-500 mt-4"></div>
        <div className="sub-heading mt-4">
          <h5 className="text-sm md:text-base text-gray-700">
            Software Workshop provides software development services to Enterprises to help them achieve their Business Goals. <br/><br/>We bring not just 28+ years of experience to the relationships, but also cutting edge technical skills using Cloud-native and Enterprise Java stacks.
          </h5>
        </div>
        <button className="custom-button button bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">
          Contact Us
        </button>
      </div>
      <div className="section-img relative mt-8 mb-8">
        <img
          className="bn-image object-contain w-full"
          src="https://images.prismic.io/software-workshop/e016653a-b273-4ea3-a20e-2fcdea342e53_android-mobile-app-development-7815022%2B%25281%2529.png?auto=compress,format"
          alt="custom software development"
          width="500"
          height="500"
        />
      </div>
      
    </div>
  );
};

export default Banner;

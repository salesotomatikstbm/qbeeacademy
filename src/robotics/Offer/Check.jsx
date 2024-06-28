import React from 'react';

const Check = () => {
  return (
    <div className="px-4 py-8 md:px-8 md:py-12 lg:pb-10" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      <h1 className="text-5xl font-bold text-center mb-4 text-blue-600">Overview of RoboFest 2024</h1>
      <div className="flex justify-center">
        <iframe
          className="w-full md:w-4/5 h-80 md:h-96 lg:h-[600px] border-0"
          src="https://gamma.app/embed/dv6i2tupy4vlxaz"
          allow="fullscreen"
          title="RoboFest 2024: Igniting Young Minds"
        ></iframe>
      </div>
    </div>
  );
}

export default Check;

import React from 'react';

const Lastsection = () => {
  return (
    <div className="py-14 px-6 bg-[#F9F9F9] flex flex-col items-center sm:px-10 sm:py-16 lg:px-[140px]">
      <div className="flex flex-col gap-5 justify-center items-center text-dark-blue text-center text-xl">
        <p className="font-bold text-[28px]">QBee Academy is a platform to :</p>
        <p>1. Upskill in Industry relevant skillset to become a Top 1% Tech and Data Industry.</p>
        <p>2. Get interview calls from prominent start-ups & top product companies to make a successful career switch.</p>
        <p>Still, have questions? Let our program specialist help you out!</p>
      </div>
      <button className="px-16 py-4 bg-navy-blue text-white mt-8 text-lg rounded font-medium">
        Request A Callback
      </button>
    </div>
  );
};

export default Lastsection;

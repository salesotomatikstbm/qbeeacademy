import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Features</h2>
        <p className="text-lg mb-8">Explore the features that make QBee Academy unique.</p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">Feature 1</h3>
              <p className="text-gray-700">Description of Feature 1</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">Feature 2</h3>
              <p className="text-gray-700">Description of Feature 2</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">Feature 3</h3>
              <p className="text-gray-700">Description of Feature 3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

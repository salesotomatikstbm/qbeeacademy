import React from 'react';
import Main from '../../assets/main.png'; 

const Section = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="md:flex md:justify-center md:space-x-8">
        <div className="md:w-1/2 mt-8 md:mt-0">
            <img src={Main} alt="Illustration" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl font-bold mb-4 text-primary">Reputed Edtech platform for <br className="md:hidden" /> QBee Academy</h1>
            <p className="text-lg leading-relaxed mb-4">
              QBee Academy is an IIT-M & IIM-A incubated Ed-tech company that focuses on providing personalized learning solutions for its learners right from online learning, upskilling & recruitment opportunities in world-class quality. And, bestow tech-skills with the comfort of your native language.
            </p>
            <p className="text-lg mb-4 font-bold">
              Quick Bridge for Educational Excellence - Academy
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Section;

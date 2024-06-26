import React from 'react';
import Skill from '../../assets/Skill.png';
import Future from '../../assets/Future.png';
import Coding from '../../assets/Coding.png';
import { Helmet } from 'react-helmet';

const RoboCHAMPS = () => {
  return (
    <div className="py-12" style={{ fontFamily: 'Open Sans, sans-serif' }}>
 <Helmet>
        <title>RoboFest 2024 - Qbee Academy</title>
        <meta name="description" content="Discover the champions of robotics at Qbee Academy. Learn from the best and become a RoboCHAMP." />
        <meta name="keywords" content="RoboCHAMPS, Robotics Champions, Qbee Academy" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-5xl font-bold text-blue-600">Why children</div>
          <div className="text-5xl font-extrabold text-blue-600">should learn to code</div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:max-w-5xl md:mx-auto">
          <Card
            imgSrc={Skill}
            alt="Develop key skills"
            title="Develop key skills"
            description="Learning to code helps improve a child's logical thinking and problem-solving skills by 70%, also enabling them to perform better at school."
          />
          <Card
            imgSrc={Future}
            alt="Prepare for the future"
            title="Prepare for the future"
            description="Children need to learn coding and develop digital skills if they want to be successful in the technology-driven job market of the future."
          />
          <Card
            imgSrc={Coding}
            alt="Learn through coding"
            title="Learn through coding"
            description="Our STEM-focused curriculum makes coding a learning aid and helps kids develop a deeper understanding of the subjects they study at school."
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ imgSrc, alt, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <img
            src={imgSrc}
            alt={alt}
            className="w-full md:w-48 h-auto object-cover mx-auto md:mx-0"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <div className="text-2xl font-bold mb-2">{title}</div>
          <div className="text-lg">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default RoboCHAMPS;

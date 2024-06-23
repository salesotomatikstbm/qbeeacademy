import React from 'react';

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Instant Bank Account Opening with Full KYC Abilities',
      description: 'Open a bank account in under 5 minutes with full KYC abilities, complying with RBI standards. Embrace seamless onboarding and digital banking transformation with our efficient solution.'
    },
    {
      id: 2,
      title: 'SmartCafeteria: Cashless Canteen Management Solution',
      description: 'SmartCafeteria is a cashless canteen management solution designed to simplify and enhance Canteen Management. SmartCafeteria is a fully integrated solution that eliminates the tedious activities related to cash reconciliation.'
    },
    {
      id: 3,
      title: 'Name Match Service: Streamlining Aadhaar and PAN Card Verification',
      description: 'Designed for seamless KYC processes, it accurately matches PAN and Aadhaar cards, ensuring they belong to the same individual. Powered by our proprietary algorithm, trained on over 100,000 name pairs, it efficiently verifies identities with utmost precision. Simplify and enhance your KYC procedures with our cutting-edge Name Match API, delivering reliable and efficient results. We also integrate with the client\'s operations process for any manual approvals.'
    },
    {
      id: 4,
      title: 'LogiTrack: Smart-Card Based Logistic Solution',
      description: 'Enable accurate monitoring of LPG tanker loading/unloading. The system performs mandatory checks on licenses and permits, while the smart card stores transaction details for easy updating of local information systems. Enhance efficiency and compliance with our integrated Visitor Pass and Gate Pass modules.'
    },
  ];

  return (
    <div className="project-section bg-gray-100 py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="project-info text-center mb-8">
          <div className="heading">
            <h2 className="text-2xl font-bold mb-2">Our Projects</h2>
          </div>
          <div className="sub-heading">
            <h6 className="text-lg text-gray-600">
              Our services range from Customised Software Development on both Windows and Linux platforms,
              Desktop, Client-Server and Web-based applications,
            </h6>
          </div>
        </div>
        <div className="project-cards grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              className={`project-card bg-white p-6 rounded shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}
              style={{ transitionDelay: `${index * 100}ms` }} // Adjust transition delay here
              key={project.id}
            >
              <div className="cardIndex flex items-center mb-4">
                <div className="outlined-font text-blue-500 text-4xl font-extrabold mr-2">
                  {project.id}
                </div>
                <div className="circular-ellipse bg-blue-500 h-2 w-2 rounded-full"></div>
              </div>
              <div className="project-heading">
                <h1 className="text-xl font-semibold mb-2">{project.title}</h1>
              </div>
              <div className="project-sub-heading">
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="custom-button project-btn bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300">
            View More
          </button>
        </div>
      </div>
      <div className="gradient project-gradient-1"></div>
      <div className="gradient project-gradient-2"></div>
      <div className="gradient project-gradient-3"></div>
    </div>
  );
};

export default ProjectSection;

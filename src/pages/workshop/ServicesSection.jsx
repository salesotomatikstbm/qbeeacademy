import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Web application development focuses on creating dynamic and interactive applications that are accessible through web browsers. We specialize in developing web applications that provide seamless user experiences and efficient performance across devices and platforms.'
    },
    {
      id: 2,
      title: 'App Development',
      description: 'Mobile app development involves creating native or cross-platform applications for iOS and Android devices that deliver engaging and intuitive user experiences.'
    },
    {
      id: 3,
      title: 'DevOps',
      description: 'DevOps combines software development and IT operations to enable continuous integration, continuous delivery, and efficient collaboration. Our DevOps experts work closely with development teams to automate processes, streamline deployments, and optimize infrastructure.'
    },
    {
      id: 4,
      title: 'QA / Testing',
      description: 'Quality assurance and testing are integral parts of the software development lifecycle. We employ a range of testing methodologies and frameworks to ensure that our solutions meet the highest quality standards.'
    },
    {
      id: 5,
      title: 'E-commerce Development',
      description: 'E-commerce development revolves around building secure and feature-rich online stores and e-commerce platforms. Our team excels in developing e-commerce solutions that provide seamless product catalogs, intuitive shopping carts, secure payment gateways, and efficient inventory management.'
    },
    {
      id: 6,
      title: 'Custom Software Development',
      description: 'Custom software development involves designing and developing bespoke software solutions tailored to the unique needs and requirements of businesses. Our experienced team of developers works closely with clients to understand their objectives and build software that aligns with their vision.'
    },
  ];

  return (
    <div className="services-section bg-gray-100 py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="services-info text-center mb-8">
          <div className="heading">
            <h3 className="text-2xl font-bold mb-2">Our Services</h3>
          </div>
          <div className="sub-heading">
            <h6 className="text-lg text-gray-600">
              Our services range from Customised Software Development on both Windows and Linux platforms, Desktop,
              Client-Server and Web-based applications,
            </h6>
          </div>
        </div>
        <div className="services-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div 
              className="service-card bg-white p-6 rounded shadow-lg flex flex-col justify-between transform hover:-translate-y-2 hover:shadow-xl transition-transform duration-300" 
              key={service.id}>
              <div>
                <div className="card-index">
                  <p className="card-index-number text-4xl font-extrabold text-blue-500">{service.id}</p>
                </div>
                <div className="card-heading">
                  <h1 className="text-xl font-semibold mt-4">{service.title}</h1>
                </div>
                <div className="card-sub-heading mt-2">
                  <p className="text-sm text-gray-700">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="custom-button bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300">View More</button>
        </div>
      </div>
      <div className="gradient services-gradient-1"></div>
      <div className="gradient services-gradient-2"></div>
    </div>
  );
};

export default ServicesSection;

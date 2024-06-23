import React from 'react';

const Footer1 = () => {
  return (
    <footer className="bg-purple-800 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Contact Information */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-gray-300">QBee Academy</p>
            <p className="text-gray-300">16/379 Mullai Nagar, 2nd Cross street</p>
            <p className="text-gray-300">West Tambaram, Tambaram, Chennai,</p>
            <p className="text-gray-300">Tamil Nadu 600 045</p>
            <p className="text-gray-300 mt-2">Mobile No: +91 86102 10593</p>
            <p className="text-gray-300">E-mail: qbee.academy@gmail.com</p>
          </div>
          {/* Useful Links */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
            <h3 className="text-xl font-bold mb-2">Useful Links</h3>
            <ul>
              <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#robofest" className="text-gray-300 hover:text-white">RoboFest 2024</a></li>
              <li><a href="#courses" className="text-gray-300 hover:text-white">Our Courses</a></li>
              <li><a href="#why-robotics" className="text-gray-300 hover:text-white">Why Robotics</a></li>
              <li><a href="#workshops" className="text-gray-300 hover:text-white">Our Workshops</a></li>
            
            </ul>
          </div>
          {/* Social Media and Copyright */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0 flex flex-col lg:flex-row justify-between items-start lg:items-center">
            {/* Location Map */}
            <div className="mb-4 lg:mb-0">
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <iframe
                title="QBee Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.67562453136!2d80.102924!3d12.928989!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fecbc8ca403%3A0x29acb81c7736863f!2sOtomatiks%20Tambaram!5e0!3m2!1sen!2sin!4v1719037038727!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        {/* Divider */}
        <hr className="border-gray-700 my-6" />
        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <div className=" items-center mr-12">
            <p className="text-center">&copy; 2024 QBee Academy. All rights reserved.</p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;

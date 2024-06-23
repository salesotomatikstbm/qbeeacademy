import React from 'react';
import dream from '../../assets/Dream.png'
const HeroModule = () => {
  return (
    <div className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div data-testid="cxtui-hero-content" className="flex flex-col justify-center">
            <label className="text-sm uppercase text-gray-400 mb-4">REAL-WORLD EXPERIENCE FOR CAREER SUCCESS</label>
            <h1 className="text-4xl font-bold mb-6">Internships for students</h1>
            <p className="text-lg text-gray-300">
              We offer real-world experience, showing you just what it&rsquo;s like to work at the highest-level, accelerating the progression of your career, and setting you up for success. As a student intern, the knowledge and skills you&rsquo;ve gained during your studies will come to life.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img 
              alt="Amazon Interns" 
              loading="lazy" 
              width="2736" 
              height="1824" 
              decoding="async" 
              className="rounded-lg shadow-lg" 
              style={{ color: 'transparent', objectPosition: '0% 0%' }} 
                          src={dream} 
            />
          </div>
        </div>
      </div>
      <section className="bg-gray-100 text-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-left">As an intern with us, you'll...</h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <li className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Have a big impact</h3>
              <p className="text-gray-600">
                You&rsquo;ll own your project from start to finish, diving deep into products, services, and programs that will impact millions of customers.
              </p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Gain skills</h3>
              <p className="text-gray-600">
                Through formalized training and hands-on learning, you&rsquo;ll analyze data, solve problems, and design solutions with the customer at the center.
              </p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Build a network</h3>
              <p className="text-gray-600">
                From day-to-day to special events, you&rsquo;ll have the chance to link up with peers around the world.
              </p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Receive a mentor</h3>
              <p className="text-gray-600">
                Your manager will pair you with a mentor who will support and coach you, providing feedback for your success.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HeroModule;

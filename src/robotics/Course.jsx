import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Course_1 from '../assets/Course_1.png';
import Course_2 from '../assets/Course_2.png';
import Course_3 from '../assets/Course_3.png';
import Course_4 from '../assets/Course_4.png';
import Course_5 from '../assets/Course_5.png';
import Course_6 from '../assets/Course_6.png';

const Course = () => {
  const courses = [
    {
      src: Course_1,
      title: 'Robo Starter',
      description: 'This course is designed for young enthusiasts to start their journey into robotics. They will learn the basics of robotics and coding through fun and interactive modules.',
    },
    {
      src: Course_2,
      title: 'Robo Explorers',
      description: 'In this course, students will explore the world of robotics more deeply, gaining hands-on experience with various robotic systems and learning advanced coding techniques.',
    },
    {
      src: Course_3,
      title: 'Code Crafters',
      description: 'Code Crafters focuses on teaching kids how to create and craft their own code. They will work on projects that enhance their logical thinking and problem-solving skills.',
    },
    {
      src: Course_4,
      title: 'Robo Champion',
      description: 'This course is for older students who want to become champions in robotics. It covers advanced topics and complex projects that will challenge and inspire them.',
    },
    {
      src: Course_5,
      title: 'App Wizard',
      description: 'App Wizard is perfect for teens interested in app development. They will learn to design, develop, and deploy their own applications, gaining valuable skills for the future.',
    },
    {
      src: Course_6,
      title: 'Robo Engineer',
      description: 'Robo Engineer is an advanced course for students who aspire to become robotics engineers. It covers in-depth engineering principles and hands-on projects.',
    },
  ];

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="py-12">
      <section className="container mx-auto px-6 lg:px-24">
        <h1 className="text-center text-4xl font-bold mb-8">Robotics Courses</h1>

        {isMobileView ? (
          <div className="mb-8">
            <Slider {...sliderSettings}>
              {courses.map((course, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="relative bg-gray-100 p-4">
                    <img src={course.src} alt={course.title} className="w-30 h-auto mx-auto" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-700">{course.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
                <div className="relative bg-gray-100 p-4">
                  <img src={course.src} alt={course.title} className="w-30 h-auto mx-auto" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Course;

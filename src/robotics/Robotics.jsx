import React, { useState, useEffect } from 'react';
import Head from './Head';
import Course from './Course';
import Navigation from './Navigation';
import RoboFest_2024 from './RoboFest_2024';
import FAQ from './FAQ';
import RoboCHAMPS from './RoboCHAMPS';
import Course1 from './Course1';
import Footer1 from './Footer1';
import PreviousWorkshopVideos from './PreviousWorkshopVideos';
import PopularCourses from './PopularCourses';
import EventSection from './EventSection';
import EventDetails from './EventDetails';

const Robotics = () => {


  return (
    <div>
      <div>
        <Navigation />
      </div>
     
      <div id="home" className="bg-purple-800 pt-20 relative">
        <Head />
      </div>   
      <div id="robofest" className="relative z-0">
        <RoboFest_2024 />
      </div>
      <EventDetails />
      <div id="courses">
        <PopularCourses />
        <Course />
        <Course1 />
      </div>
      
      <div id="why-robotics">
        <RoboCHAMPS />
      </div>
      
      <div id="workshops">
        <PreviousWorkshopVideos />
      </div>
      
      <div id="faq">
        <FAQ />
      </div>



      <EventSection />


      
      <div id="contact">
        <Footer1 />
      </div>
    </div>
  );
};

export default Robotics;

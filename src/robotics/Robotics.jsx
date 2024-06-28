import Top from './Head/Top';
import Course from './Course/Course';
import Navigation from './Head/Navigation';
import RoboFest2024 from './Middle/RoboFest_2024';
import FAQ from './Foot/FAQ';
import RoboCHAMPS from './Middle/RoboCHAMPS';
import Course1 from './Course/Course1';
import Footer1 from './Foot/Footer1';
import PreviousWorkshopVideos from './Course/PreviousWorkshopVideos';
import PopularCourses from './Course/PopularCourses';
import EventSection from './Offer/EventSection';
import EventDetails from './Offer/EventDetails';
import ContactForm from './Foot/ContactForm';
import Check from './Offer/Check';


const Robotics = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <div id="home" className="bg-purple-800 pt-20 relative">
        <Top />
      </div>

      <div id="robofest" className="relative z-0">
        <RoboFest2024 />
      </div>

      <div>
        <EventSection />
      </div>

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
      <div>
        <Check />
      </div>

      <div>
        <EventDetails />
      </div>

      <div id="contact">
        <ContactForm />
      </div>

      <div>
        <Footer1 />
      </div>





    </div>
  );
};

export default Robotics;

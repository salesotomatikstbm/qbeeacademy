import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 mx-auto text-lg lg:text-xl " style={{ fontFamily: 'Open Sans, sans-serif' }}>
      <h1 className="text-center text-3xl lg:text-4xl font-bold mb-8 text-blue-600">FAQ</h1>
      <div className="max-w-3xl mx-auto">
        <div className="grid gap-4">
          
          <Accordion
            title="What is QBee Academy?"
            answer={
              <span>
                QBee Academy is hosting the event, providing educational opportunities in robotics and coding for young learners.
              </span>
            }
            className="transform transition-transform duration-200 hover:scale-105"
          />
          <Accordion
            title="What is Bot Showcase?"
            answer={
              <span>
                Bot Showcase is an event where kids aged 7-15 can participate in hands-on bot building activities and challenges, demonstrating their creativity and innovation in robotics.
              </span>
            }
            className="transform transition-transform duration-200 hover:scale-105"
          />
          <Accordion
            title="What is Bot Assembling?"
            answer={
              <span>
                Bot Assembling is part of the event activities where kids will learn to assemble and build their own robots under guidance.
              </span>
            }
            className="transform transition-transform duration-200 hover:scale-105"
          />
          <Accordion
            title="What is Robo Race?"
            answer={
              <span>
                Robo Race is a challenge game where participants compete in robotic races, showcasing their robot's speed and agility.
              </span>
            }
            className="transform transition-transform duration-200 hover:scale-105"
          />
          <Accordion
            title="What is RoboFest 2024?"
            answer={
              <span>
                RoboFest 2024 is a robotics competition offering various activities like bot building, RoboRace, expert talks, and showcasing innovative projects.
              </span>
            }
            className="transform transition-transform duration-200 hover:scale-105"
          />
          <Accordion
            title="What activities are included?"
            answer={
              <span>
                The event includes a Bot Building Workshop, RoboRace Challenge Game, Bot Showcase, Expert Talk on Robotics Education, and an overview of QBee Academy's Robotics Courses.
              </span>
            }
            className="transform transition-transform duration-200 hover:scale-105"
          />
          <Accordion
            title="What are the special offers for participants?"
            answer={
              <span>
                Participants can avail discounts on robotics courses, complimentary tablet, competition participation, smartwatch, and workshops based on enrollment levels.
              </span>
            }
            className="transform transition-transform duration-200 hover:scale-105"
          />
          <Accordion
            title="How do I register for RoboFest 2024?"
            answer={
              <span>
                Registration can be done online through the QBee Academy website. Registrants will need to pay a registration fee of Rs. 99 to secure their spot.
              </span>
            }
            className="transform transition-transform duration-200 hover:scale-105"
          />
          <Accordion
            title="What should I bring to the event?"
            answer={
              <span>
                Participants should bring their robots, necessary tools, chargers, and any specified equipment as per the competition rules.
              </span>
            }
            className="transform transition-transform duration-200 hover:scale-105"
          />
          <Accordion
            title="How are winners determined at RoboFest 2024?"
            answer={
              <span>
                Winners will be chosen based on their performance in various challenges, judged on design, functionality, programming, and problem-solving skills.
              </span>
            }
            className="transform transition-transform duration-200 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;

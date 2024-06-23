import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 mx-auto text-lg lg:text-xl">
      <h1 className="text-center text-3xl lg:text-4xl font-bold mb-8">FAQ</h1>
      <div className="max-w-3xl mx-auto">
        <div className="grid gap-4">
          <Accordion
            title="What is Robofest 2024?"
            answer={
              <span>
                Robofest 2024 is a state-level robotics competition where children can showcase their engineering, programming, and problem-solving skills through various challenges.
              </span>
            }
            className="transform transition-transform duration-200 hover:scale-105"
          />
          <Accordion
            title="Who can participate in Robofest 2024?"
            answer={
              <span>
                Robofest 2024 is open to children and teens of all skill levels who are interested in robotics and coding.
              </span>
            }
            className="transform transition-transform duration-200 hover:scale-105"
          />
          <Accordion
            title="What are the categories?"
            answer={
              <span>
                The competition includes categories such as Line Following, Sumo Bots, RoboArts, and Game Challenges, each designed to test different aspects of robotics skills.
              </span>
            }
            className="transform transition-transform duration-200 hover:scale-105"
          />
          <Accordion
            title="What is the schedule?"
            answer={
              <span>
                Robofest 2024 will be held over several days with specific dates for registration, preliminary rounds, and the final competition. Please check our official website for detailed schedules.
              </span>
            }
            className="transform transition-transform duration-200 hover:scale-105"
          />
          <Accordion
            title="How can I register for Robofest 2024?"
            answer={
              <span>
                Participants can register for Robofest 2024 through our official website. Registration details and deadlines will be provided there.
              </span>
            }
            className="transform transition-transform duration-200 hover:scale-105"
          />
          <Accordion
            title="What are the rules for Robofest 2024?"
            answer={
              <span>
                The rules for each category of Robofest 2024 can be found on our website. Participants are encouraged to review the rules thoroughly to ensure compliance.
              </span>
            }
            className="transform transition-transform duration-200 hover:scale-105"
          />
          <Accordion
            title="What resources are available?"
            answer={
              <span>
                We provide various resources including tutorials, past competition videos, and practice challenges on our website to help participants prepare for Robofest 2024.
              </span>
            }
            className="transform transition-transform duration-200 hover:scale-105"
          />
          <Accordion
            title="Where will Robofest 2024 be held?"
            answer={
              <span>
                The location for Robofest 2024 will be announced on our official website. It will be held at a venue that can accommodate the different challenges and participants comfortably.
              </span>
            }
            className="transform transition-transform duration-200 hover:scale-105"
          />
          <Accordion
            title="What should I bring to Robofest 2024?"
            answer={
              <span>
                Participants should bring their robots, necessary tools, chargers, and any other equipment specified in the competition rules. Details will be provided upon registration.
              </span>
            }
            className="transform transition-transform duration-200 hover:scale-105"
          />
          <Accordion
            title="How are winners determined?"
            answer={
              <span>
                Winners are determined based on their performance in the various challenges. Judging criteria include design, functionality, programming, and overall problem-solving skills.
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

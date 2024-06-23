import React from "react";
import { Link } from "react-router-dom";

export const links = [
  {
    name: "Courses",
    submenu: true,
    sublinks: [
      {
        Head: "Programming",
        sublink: [
          { name: "Java Full Stack Development", link: "/courses/Javafsd" }, 
          { name: "Python Full Stack Development", link: "/courses/Pythonfsd" },
          { name: "Core Java", link: "/" },
          { name: "Core Python", link: "/" },
          { name: "React Development", link: "/" },
        ],
      },
      {
        Head: "Cloud",
        sublink: [
          { name: "Amazon Web Services (AWS)", link: "/" },
          { name: "Microsoft Azure", link: "/" },
          { name: "DevOps", link: "/" },
        ],
      },
      {
        Head: "SAP (S4/HANA)",
        sublink: [
          { name: "Materials Management", link: "/" },
          { name: "Finance & Accounting", link: "/" },
          { name: "Sales & Distribution", link: "/" },
        ],
      },
    ],
  },
];

const Sublinks = ({ sublinks }) => {
  // Find the maximum number of sublinks among all sections
  const maxSublinksCount = Math.max(...sublinks.map(({ sublink }) => sublink.length));

  return (
    <div className={`grid grid-cols-${maxSublinksCount} gap-4`}>
      {sublinks.map((slink, slinkIndex) => (
        <div key={slinkIndex} className="text-sm text-gray-600">
          {slink.sublink.map((sublink, index) => (
            <div key={index}>
              <Link to={sublink.link}>{sublink.name}</Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sublinks;

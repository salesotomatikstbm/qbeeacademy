import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = ({ setOpen }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null);

  const handleDropdown = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      setActiveSubIndex(null);
    } else {
      setActiveIndex(index);
      setActiveSubIndex(null);
    }
  };

  const handleSubDropdown = (index) => {
    if (activeSubIndex === index) {
      setActiveSubIndex(null);
    } else {
      setActiveSubIndex(index);
    }
  };

  return (
    <div className="md:flex">
      {links.map((link, index) => (
        <div key={index} className="relative group md:cursor-pointer">
          <div className="px-3 text-left">
            <h1
              className="py-4 flex justify-between items-center md:pr-0 pr-5"
              onClick={() => handleDropdown(index)}
            >
              <span className="truncate w-full">{link.name}</span>
              <span className="text-xl md:hidden">
                <ion-icon
                  name={`${activeIndex === index ? "chevron-up" : "chevron-down"}`}
                ></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div
                className={`${
                  activeIndex === index ? "block" : "hidden"
                } md:absolute md:top-full md:left-0 md:w-auto w-full bg-white md:shadow-lg md:rounded-lg overflow-hidden`}
              >
                <div className="md:py-3">
                  <div className="md:w-4 md:h-4 md:left-3 md:absolute md:mt-1 bg-white md:rotate-45"></div>
                </div>
                <div className="md:p-5">
                  {link.sublinks.map((mysublinks, subIndex) => (
                    <div key={subIndex}>
                      <h1 className="text-lg font-semibold mb-2">{mysublinks.Head}</h1>
                      <ul>
                        {mysublinks.sublink.map((slink, slinkIndex) => (
                          <li key={slinkIndex} className="text-sm text-gray-600 my-2.5">
                            <Link
                              to={slink.link}
                              className="hover:text-blue-500"
                              onClick={() => setOpen(false)}
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Mobile dropdowns */}
          {link.submenu && (
            <div className={`md:hidden ${activeIndex === index ? "block" : "hidden"} bg-blue-500`}>
              {link.sublinks.map((slinks, slinksIndex) => (
                <div key={slinksIndex}>
                  <h1
                    className="py-4 pl-7 font-semibold flex justify-between items-center"
                    onClick={() => handleSubDropdown(slinksIndex)}
                  >
                    <span className="truncate w-full">{slinks.Head}</span>
                    <span className="text-xl">
                      <ion-icon
                        name={`${activeSubIndex === slinksIndex ? "chevron-up" : "chevron-down"}`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div className={`${activeSubIndex === slinksIndex ? "block" : "hidden"} pl-10`}>
                    {slinks.sublink.map((slink, slinkIndex) => (
                      <li key={slinkIndex} className="py-3">
                        <Link to={slink.link} onClick={() => setOpen(false)}>
                          {slink.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavLinks;

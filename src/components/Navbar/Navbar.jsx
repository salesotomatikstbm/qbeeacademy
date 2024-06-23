import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button from "./Button";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 h-20"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #100D25, #100D25, #190B69)",
        color: "white",
      }}
    >
      <div className="w-full flex items-center justify-between px-5">
        <Link to="/" className="h-20 flex items-center">
          <img src={Logo} alt="logo" className="w-48 h-auto" />
        </Link>
        {/* Hamburger menu icon for mobile */}
        <div className="md:hidden text-3xl" onClick={handleMenuToggle}>
          <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
        </div>
        {/* Desktop navigation links */}
        <ul className="hidden md:flex items-center gap-8 font-poppins">
          <li>
            <Link
              to="/"
              className={`py-7 px-3 inline-block ${
                location.pathname === "/" ? "text-blue-500" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <NavLinks setOpen={setOpen} />
          <li>
            <Link
              to="/workshop"
              className={`py-7 px-3 inline-block ${
                location.pathname === "/workshop" ? "text-blue-500" : ""
              }`}
            >
              Workshop
            </Link>
          </li>
          <li>
            <Link
              to="/internship"
              className={`py-7 px-3 inline-block ${
                location.pathname === "/internship" ? "text-blue-500" : ""
              }`}
            >
              Internship
            </Link>
          </li>
          <li>
            <Link
              to="/placement"
              className={`py-7 px-3 inline-block ${
                location.pathname === "/placement" ? "text-blue-500" : ""
              }`}
            >
              Placement
            </Link>
          </li>
          <li>
            <Link
              to="/robotics"
              className={`py-7 px-3 inline-block ${
                location.pathname === "/robotics" ? "text-blue-500" : ""
              }`}
            >
              Robotics
            </Link>
          </li>
        </ul>
        {/* Button component on desktop */}
        <div className="hidden md:block">
          <Button />
        </div>
      </div>
      {/* Mobile nav */}
      <ul
        className={`md:hidden bg-blue-500 fixed w-full top-20 left-0 ${
          open ? "block" : "hidden"
        }`}
      >
        <li>
          <Link
            to="/"
            className={`block py-3 px-4 text-white ${
              location.pathname === "/" ? "text-blue-500" : ""
            }`}
            onClick={handleMenuToggle}
          >
            Home
          </Link>
        </li>
        <NavLinks setOpen={setOpen} />
        <li>
          <Link
            to="/workshop"
            className={`block py-3 px-4 text-white ${
              location.pathname === "/workshop" ? "text-blue-500" : ""
            }`}
            onClick={handleMenuToggle}
          >
            Workshop
          </Link>
        </li>
        <li>
          <Link
            to="/internship"
            className={`block py-3 px-4 text-white ${
              location.pathname === "/internship" ? "text-blue-500" : ""
            }`}
            onClick={handleMenuToggle}
          >
            Internship
          </Link>
        </li>
        <li>
          <Link
            to="/placement"
            className={`block py-3 px-4 text-white ${
              location.pathname === "/placement" ? "text-blue-500" : ""
            }`}
            onClick={handleMenuToggle}
          >
            Placement
          </Link>
        </li>
        <li>
          <Link
            to="/robotics"
            className={`block py-3 px-4 text-white ${
              location.pathname === "/robotics" ? "text-blue-500" : ""
            }`}
            onClick={handleMenuToggle}
          >
            Robotics
          </Link>
        </li>
        {/* Button component on mobile */}
        <li className="pt-4">
          <Button />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80;
      const sections = ['home', 'robofest', 'courses', 'why-robotics', 'workshops', 'contact'];

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveLink(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(location.hash.substring(1));
  }, [location]);

  const handleSoftwareClick = () => {
    setIsOpen(false);
    navigate('/');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Offset value to adjust for fixed navigation height
  const offsetValue = -80;

  return (
    <nav className="bg-purple-800 p-4 flex justify-between items-center h-20 fixed w-full z-10">
      <div>
        <img src={Logo} alt="Logo" className="w-48 h-auto" />
      </div>
      <div className="hidden md:flex space-x-6">
        <NavLink to="home" onClick={toggleMenu} activeLink={activeLink} offset={offsetValue}>Home</NavLink>
        <NavLink to="robofest" onClick={toggleMenu} activeLink={activeLink} offset={offsetValue}>RoboFest 2024</NavLink>
        <NavLink to="courses" onClick={toggleMenu} activeLink={activeLink} offset={offsetValue}>Our Courses</NavLink>
        <NavLink to="why-robotics" onClick={toggleMenu} activeLink={activeLink} offset={offsetValue}>Why Robotics</NavLink>
        <NavLink to="workshops" onClick={toggleMenu} activeLink={activeLink} offset={offsetValue}>Our Workshops</NavLink>
        <NavLink to="contact" onClick={toggleMenu} activeLink={activeLink} offset={offsetValue}>Contact</NavLink>
        <button onClick={handleSoftwareClick} className="hover:underline text-white py-2 px-4 block md:inline-block cursor-pointer">Software</button>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          <ion-icon name={isOpen ? "close" : "menu"} size="large"></ion-icon>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-purple-800 flex flex-col items-center md:hidden">
          <NavLink to="home" onClick={toggleMenu} activeLink={activeLink} offset={offsetValue}>Home</NavLink>
          <NavLink to="robofest" onClick={toggleMenu} activeLink={activeLink} offset={offsetValue}>RoboFest 2024</NavLink>
          <NavLink to="courses" onClick={toggleMenu} activeLink={activeLink} offset={offsetValue}>Our Courses</NavLink>
          <NavLink to="why-robotics" onClick={toggleMenu} activeLink={activeLink} offset={offsetValue}>Why Robotics</NavLink>
          <NavLink to="workshops" onClick={toggleMenu} activeLink={activeLink} offset={offsetValue}>Our Workshops</NavLink>
          <NavLink to="contact" onClick={toggleMenu} activeLink={activeLink} offset={offsetValue}>Contact</NavLink>
          <button onClick={handleSoftwareClick} className="hover:underline text-white py-2 px-4 block md:inline-block cursor-pointer">Software</button>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children, onClick, activeLink, offset }) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      spy={true}
      activeClass={activeLink === to ? "font-bold" : ""}
      className="hover:underline text-white py-2 px-4 block md:inline-block cursor-pointer"
      onClick={onClick}
      offset={offset}
    >
      {children}
    </Link>
  );
};

export default Navigation;

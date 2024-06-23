import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Workshop from './pages/workshop/Workshop';
import Internship from './pages/internship/Internship';
import Placement from './pages/placement/Placement';
import Javafsd from './courses/javafsd/Javafsd';
import Pythonfsd from './courses/pythonfsd/Pythonfsd';
import Footer from './components/Footer';
import Robotics from './robotics/Robotics';
import Main from './pages/home/Main';

const App = () => {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === '/robotics';

  return (
    <div>
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/robotics" element={<Robotics />} />
        <Route path="/courses/javafsd" element={<Javafsd />} />
        <Route path="/courses/pythonfsd" element={<Pythonfsd />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
};

export default App;

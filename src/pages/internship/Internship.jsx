import React from 'react'
import HeroModule from './HeroModule'
import InternshipsSection from './InternshipsSection'
import { Helmet } from 'react-helmet';

const Internship = () => {
  return (
    <div className="mt-12" >
       <Helmet>
        <title>Internships - Qbee Academy</title>
        <meta name="description" content="Apply for internships to gain real-world experience in robotics and software development." />
        <meta name="keywords" content="Qbee Academy, internships, real-world experience, robotics, software development" />
      </Helmet>
      
    <HeroModule />
    <InternshipsSection />
    </div>
  )
}

export default Internship
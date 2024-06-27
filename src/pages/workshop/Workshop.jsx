import React from 'react'
import Banner from './Banner'
import { Helmet } from 'react-helmet';
import ServicesSection from './ServicesSection'
import ProjectSection from './ProjectSection'

const Workshop = () => {
  return (
    <div className="mt-12" >
      {/* <Banner /> */}
      <Helmet>
        <title>Workshops - Qbee Academy</title>
        <meta name="description" content="Join our hands-on workshops to gain practical experience in robotics and software development." />
        <meta name="keywords" content="Qbee Academy, workshops, hands-on experience, robotics, software development" />
      </Helmet>
      
      <ServicesSection />
      <ProjectSection />
    </div>
  )
}

export default Workshop
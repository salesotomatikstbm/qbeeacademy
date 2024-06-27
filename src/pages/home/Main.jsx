import React from 'react'
import Home from './Home'
import Section from './Section'
import FeaturesSection from './FeaturesSection'
// import Section2 from './Section2'
import Lastsection from './Lastsection'
import { Helmet } from 'react-helmet';

const Main = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Qbee Academy</title>
        <meta name="description" content="Welcome to Qbee Academy. Explore our wide range of courses and training programs." />
        <meta name="keywords" content="Qbee Academy, home, courses, training programs" />
      </Helmet>
      <Home />
      <Section />
      <FeaturesSection />
      {/* <Section2 /> */}
      <Lastsection />
    </div>
  )
}

export default Main

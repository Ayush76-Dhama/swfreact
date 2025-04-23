import React from 'react';
import Navigation from './components/Navigation';
import HeaderSection from './components/HeaderSection';
import AboutSection from './components/AboutSection';
import Gallery from './components/Gallery';

import Footer from './components/Footer';
import CampaignsSection from './components/CampaignsSection';
import Ayu from './components/Ayu'


const App = () => {
  return (
    <>
      <Navigation />
      <HeaderSection />
      <AboutSection />
      <Ayu/>
      <CampaignsSection />
      <Gallery />
      <Footer />
    </>
  );
};

export default App;

import React from 'react';
import Navigation from './components/Navigation';
import HeaderSection from './components/HeaderSection';
import AboutSection from './components/AboutSection';
import CampaignsSection from './components/CampaignsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navigation />
      <HeaderSection />
      <AboutSection />
      <CampaignsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;

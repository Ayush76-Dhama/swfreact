import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import HeaderSection from './components/HeaderSection';
import AboutSection from './components/AboutSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import CampaignsSection from './components/CampaignsSection';
import Ayu from './components/Ayu';
import ContactSection from './components/ContactSection';
import ImpactSection from './components/ImpactSection';
import Join from './components/Join';
import Impact from './components/Impact';
import VisionMission from './components/VisionMission';
import Tender from './components/Tender';
import OurSupporters from './components/OurSupporters';
import OurCampaigns from './components/OurCampaigns';

const App = () => {
  return (
    <Router>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeaderSection />
            <AboutSection />
            <ImpactSection/>
            <Ayu />
            <CampaignsSection />
            <Join />
            <Gallery />
          </>
        } />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/impactsection" element={<ImpactSection />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/tender" element={<Tender />} />
        <Route path="/our-supporters" element={<OurSupporters />} />
        <Route path="/campaigns" element={<CampaignsSection />} />
        <Route path="/our-campaigns" element={<OurCampaigns />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

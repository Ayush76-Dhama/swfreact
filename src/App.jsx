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

const App = () => {
  return (
    <Router>
      { <TopBar />}
      { <Navbar /> }
      <Routes>
        <Route path="/" element={
          <>
          {/* <TopBar />
           <Navbar /> */}
            <HeaderSection />
            <AboutSection />
            <ImpactSection/>
            <Ayu />
            <CampaignsSection />
            <Gallery />
          </>
        } />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/impactsection" element={<ImpactSection />} />
        <Route path="/campaigns" element={<CampaignsSection />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

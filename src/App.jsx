import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import Donation from './components/Donation';

// Admin Components
import AdminLogin from './components/admin/AdminLogin';
import AdminSignup from './components/admin/AdminSignup';
import AdminDashboard from './components/admin/AdminDashboard';
import AboutSectionEditor from './components/admin/AboutSectionEditor';
import PageContentEditor from './components/admin/PageContentEditor';
import AdminHomeEditor from './components/admin/AdminHomeEditor';
import ContentEditor from './components/admin/ContentEditor';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('adminToken');
  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/"
        element={
          <>
            <TopBar />
            <Navbar />
            <HeaderSection />
            <AboutSection />
            <ImpactSection />
            <Ayu />
            <CampaignsSection />
            <Join />
            <Gallery />
            <Footer />
          </>
        }
      />
      <Route path="/about" element={<AboutSection />} />
      <Route path="/impact" element={<Impact />} />
      <Route path="/impactsection" element={<ImpactSection />} />
      <Route path="/vision-mission" element={<VisionMission />} />
      <Route path="/tender" element={<Tender />} />
      <Route path="/our-supporters" element={<OurSupporters />} />
      <Route path="/campaigns" element={<CampaignsSection />} />
      <Route path="/our-campaigns" element={<OurCampaigns />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<ContactSection />} />

      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/signup" element={<AdminSignup />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/content"
        element={
          <ProtectedRoute>
            <PageContentEditor />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/content-editor"
        element={
          <ProtectedRoute>
            <ContentEditor />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/about"
        element={
          <ProtectedRoute>
            <AboutSectionEditor />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/home"
        element={
          <ProtectedRoute>
            <AdminHomeEditor />
          </ProtectedRoute>
        }
      />
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute>
            <Navigate to="/admin/dashboard" replace />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

export default App;

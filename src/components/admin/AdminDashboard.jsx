import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const sections = [
    { id: 'content', title: 'Page Content Editor', path: '/admin/content', description: 'Edit content for all pages' },
    { id: 'home', title: 'Home Page', path: '/admin/home', description: 'Manage home page content' },
    { id: 'about', title: 'About Section', path: '/admin/about', description: 'Edit about section content' },
    { id: 'campaigns', title: 'Campaigns', path: '/admin/campaigns', description: 'Manage campaigns' },
    { id: 'impact', title: 'Impact', path: '/admin/impact', description: 'Update impact information' },
    { id: 'gallery', title: 'Gallery', path: '/admin/gallery', description: 'Manage photo gallery' },
    { id: 'contact', title: 'Contact Information', path: '/admin/contact', description: 'Update contact details' },
    { id: 'supporters', title: 'Supporters', path: '/admin/supporters', description: 'Manage supporters list' },
    { id: 'tenders', title: 'Tenders', path: '/admin/tenders', description: 'Manage tender information' },
  ];

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <button 
          className="logout-button"
          onClick={() => {
            localStorage.removeItem('adminToken');
            window.location.href = '/admin/login';
          }}
        >
          Logout
        </button>
      </header>
      
      <div className="dashboard-grid">
        {sections.map((section) => (
          <Link to={section.path} key={section.id} className="dashboard-card">
            <h3>{section.title}</h3>
            <p>{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard; 
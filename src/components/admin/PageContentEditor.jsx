import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PageContentEditor.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const PageContentEditor = () => {
  const [selectedPage, setSelectedPage] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // List of available pages
  const availablePages = [
    { id: 'home', name: 'Home Page' },
    { id: 'about', name: 'About Us' },
    { id: 'impact', name: 'Impact' },
    { id: 'campaigns', name: 'Campaigns' },
    { id: 'gallery', name: 'Gallery' },
    { id: 'contact', name: 'Contact' },
    { id: 'vision-mission', name: 'Vision & Mission' },
    { id: 'supporters', name: 'Our Supporters' }
  ];

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }
  }, [navigate]);

  const handlePageSelect = async (pageId) => {
    if (!pageId) return;
    
    setSelectedPage(pageId);
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_URL}/api/admin/page-content/${pageId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch page content: ${response.status}`);
      }

      const data = await response.json();
      setContent(data.content || '');
    } catch (err) {
      setError('Failed to load page content: ' + err.message);
      console.error('Error loading page content:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    if (!selectedPage) {
      setError('Please select a page first');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_URL}/api/admin/page-content/${selectedPage}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ content })
      });

      if (!response.ok) {
        throw new Error(`Failed to save content: ${response.status}`);
      }

      const data = await response.json();
      setContent(data.content);
      setSuccess('Content saved successfully!');
    } catch (err) {
      setError('Failed to save content: ' + err.message);
      console.error('Error saving content:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-content-editor">
      <div className="editor-header">
        <h2>Page Content Editor</h2>
        <div className="page-selector">
          <label htmlFor="page-select">Select Page:</label>
          <select
            id="page-select"
            value={selectedPage}
            onChange={(e) => handlePageSelect(e.target.value)}
            disabled={isLoading}
          >
            <option value="">Select a page</option>
            {availablePages.map(page => (
              <option key={page.id} value={page.id}>
                {page.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      <div className="editor-container">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={isLoading || !selectedPage}
          placeholder={selectedPage ? 'Enter page content here...' : 'Select a page to edit its content'}
          className="content-editor"
        />
      </div>

      <div className="editor-actions">
        <button
          onClick={handleSave}
          disabled={isLoading || !selectedPage}
          className="save-button"
        >
          {isLoading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
};

export default PageContentEditor; 
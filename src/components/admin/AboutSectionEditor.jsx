import React, { useState, useEffect } from 'react';
import ContentEditor from './ContentEditor';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const AboutSectionEditor = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchContent();
  }, [navigate]);

  const fetchContent = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_URL}/api/admin/page-content/about`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setContent(data.content || '');
    } catch (err) {
      setError('Failed to load content: ' + err.message);
      console.error('Error loading content:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (newContent) => {
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        navigate('/admin/login');
        return;
      }

      const response = await fetch(`${API_URL}/api/admin/page-content/about`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ content: newContent }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setContent(data.content);
      alert('Content saved successfully!');
    } catch (err) {
      console.error('Error saving content:', err);
      throw new Error('Failed to save content: ' + err.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="section-editor">
      <ContentEditor
        initialContent={content}
        onSave={handleSave}
        sectionTitle="About Section"
        allowImageUpload={true}
      />
    </div>
  );
};

export default AboutSectionEditor; 
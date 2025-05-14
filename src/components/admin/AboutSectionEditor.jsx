import React, { useState, useEffect } from 'react';
import ContentEditor from './ContentEditor';

const AboutSectionEditor = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/admin/about-content');
      if (!response.ok) throw new Error('Failed to fetch content');
      const data = await response.json();
      setContent(data.content);
    } catch (err) {
      setError('Failed to load content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (newContent) => {
    try {
      await fetch('/api/admin/about-content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newContent }),
      });
      
      // Show success message or handle success state
      alert('Content saved successfully!');
    } catch (err) {
      throw new Error('Failed to save content');
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
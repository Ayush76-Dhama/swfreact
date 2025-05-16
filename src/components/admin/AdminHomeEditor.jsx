import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const AdminHomeEditor = () => {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${API_URL}/api/admin/page-content/home`);
        const data = await res.json();
        setContent(data.content || '');
      } catch {
        setError('Failed to load content');
      } finally {
        setIsLoading(false);
      }
    };
    fetchContent();
  }, []);

  const handleSave = async () => {
    setIsLoading(true);
    setError('');
    setSuccess('');
    try {
      const res = await fetch(`${API_URL}/api/admin/page-content/home`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify({ content })
      });
      if (!res.ok) throw new Error();
      setSuccess('Content saved!');
    } catch {
      setError('Failed to save content');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem' }}>
      <h2>Edit Home Page Content</h2>
      {error && <div style={{color: 'red', marginBottom: 10}}>{error}</div>}
      {success && <div style={{color: 'green', marginBottom: 10}}>{success}</div>}
      <ReactQuill value={content} onChange={setContent} readOnly={isLoading} style={{ marginBottom: 20 }} />
      <button onClick={handleSave} disabled={isLoading} style={{ padding: '0.75rem 1.5rem', background: '#007bff', color: '#fff', border: 'none', borderRadius: 4, fontSize: 16, cursor: 'pointer' }}>
        {isLoading ? 'Saving...' : 'Save'}
      </button>
    </div>
  );
};

export default AdminHomeEditor; 
import React, { useState } from 'react';
import './ContentEditor.css';

const ContentEditor = ({ 
  initialContent, 
  onSave, 
  sectionTitle,
  allowImageUpload = true 
}) => {
  const [content, setContent] = useState(initialContent || '');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  const handleSave = async () => {
    setIsSaving(true);
    setError('');
    try {
      await onSave(content);
    } catch (error) {
      console.error('Save failed:', error);
      setError('Failed to save changes. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/admin/upload-image', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      const data = await response.json();
      const imageUrl = data.url;
      
      const imageTag = `<img src="${imageUrl}" alt="Uploaded image" />`;
      setContent(prev => prev + imageTag);
    } catch (error) {
      console.error('Image upload failed:', error);
      setError('Failed to upload image. Please try again.');
    }
  };

  const editorTools = [
    { command: 'bold', label: 'Bold' },
    { command: 'italic', label: 'Italic' },
    { command: 'underline', label: 'Underline' },
    { command: 'insertUnorderedList', label: 'Bullet List' },
    { command: 'insertOrderedList', label: 'Numbered List' },
    { command: 'createLink', label: 'Add Link' }
  ];

  return (
    <div className="content-editor">
      <div className="editor-header">
        <h2>{sectionTitle}</h2>
        <div className="editor-actions">
          {allowImageUpload && (
            <div className="image-upload">
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
              <label htmlFor="image-upload" className="upload-button">
                Upload Image
              </label>
            </div>
          )}
          <button 
            className="save-button"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="editor-toolbar">
        {editorTools.map((tool, index) => (
          <button key={index} onClick={() => document.execCommand(tool.command)}>
            {tool.label}
          </button>
        ))}
      </div>

      <div
        className="editor-content"
        contentEditable
        dangerouslySetInnerHTML={{ __html: content }}
        onInput={(e) => setContent(e.currentTarget.innerHTML)}
      />
    </div>
  );
};

export default ContentEditor; 
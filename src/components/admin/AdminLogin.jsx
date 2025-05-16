import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AdminLogin.css';

const API_URL = 'http://localhost:3000';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const fullUrl = `${API_URL}/admin/login`;
      console.log('Attempting login at:', fullUrl);
      
      const response = await fetch(fullUrl, {  // Remove /api if your backend doesn't use it
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include', // Include cookies if needed
        body: JSON.stringify(credentials)
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.token) {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin/dashboard', { state: { message: 'Login successful!' } });
      } else {
        throw new Error('No token received from server');
      }

    } catch (error) {
      console.error('Login error:', error);
      setError(
        error.message === 'Failed to fetch' 
          ? 'Unable to connect to server. Please check your internet connection.'
          : error.message || 'An unexpected error occurred'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2>Admin Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p>Don't have an account? <Link to="/admin/signup">Sign up here</Link></p>
      </div>
    </div>
  );
};

export default AdminLogin;

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AdminLogin.css';

// Use the correct API URL based on environment
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's an existing token and if it's still valid
    const token = localStorage.getItem('adminToken');
    if (token) {
      try {
        const tokenData = JSON.parse(atob(token.split('.')[1]));
        if (tokenData.exp * 1000 > Date.now()) {
          navigate('/admin/dashboard');
        } else {
          localStorage.removeItem('adminToken');
        }
      } catch {
        // If token is invalid, remove it
        localStorage.removeItem('adminToken');
      }
    }
  }, [navigate]);

  const validateCredentials = () => {
    if (!credentials.email || !credentials.password) {
      throw new Error('Please enter both email and password');
    }
    if (credentials.password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email)) {
      throw new Error('Please enter a valid email address');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      // Validate credentials before sending
      validateCredentials();

      const response = await fetch(`${API_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      });

      let errorData;
      try {
        errorData = await response.json();
      } catch {
        errorData = { message: 'Invalid server response' };
      }

      if (!response.ok) {
        if (response.status === 500) {
          console.error('Server error details:', errorData);
          if (errorData.error && errorData.error.includes('Cannot read properties of null')) {
            throw new Error('Invalid email or password');
          }
          throw new Error('Server error occurred. Please try again later or contact support.');
        }
        throw new Error(errorData.message || `Server error: ${response.status}`);
      }

      if (!errorData.token) {
        throw new Error('No authentication token received from server');
      }

      // Store token and redirect
      localStorage.setItem('adminToken', errorData.token);
      navigate('/admin/dashboard');

    } catch (error) {
      console.error('Login error:', error);
      if (!navigator.onLine) {
        setError('No internet connection. Please check your network and try again.');
      } else {
        setError(error.message || 'Unable to connect to the server. Please try again later.');
      }
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value.trim() })}
              required
              disabled={isLoading}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
              disabled={isLoading}
              placeholder="Enter your password"
              minLength={6}
            />
          </div>
          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="signup-link">
          Don't have an account? <Link to="/admin/signup">Sign up here</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin; 
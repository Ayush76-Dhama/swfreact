import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AdminLogin.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    console.log('Submitting credentials:', credentials);

    try {
      const response = await fetch(`${API_URL}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(credentials)
      });

      const data = await response.json();
      console.log('Response data:', data);

      if (!response.ok) {
        console.error('Response error:', response);
        throw new Error(data.message || 'Login failed');
      }

      if (!data.token) {
        throw new Error('No token received from server');
      }

      localStorage.setItem('adminToken', data.token);
      navigate('/admin/dashboard', { state: { message: 'Login successful!' } });

    } catch (error) {
      console.error('Login error:', error);
      setError(error.message);
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

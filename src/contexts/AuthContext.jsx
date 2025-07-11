import React, { createContext, useContext, useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api/auth';
const TOKEN_KEY = 'netflixclone_token';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Helper: set token in localStorage
  const setToken = (token) => {
    if (token) localStorage.setItem(TOKEN_KEY, token);
    else localStorage.removeItem(TOKEN_KEY);
  };

  // Helper: get token
  const getToken = () => localStorage.getItem(TOKEN_KEY);

  // Signup
  async function signup(email, password, displayName) {
    const res = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, displayName })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Signup failed');
    setToken(data.token);
    setCurrentUser(data.user);
    return data.user;
  }

  // Login
  async function login(email, password) {
    const res = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Login failed');
    setToken(data.token);
    setCurrentUser(data.user);
    return data.user;
  }

  // Logout
  function logout() {
    setToken(null);
    setCurrentUser(null);
  }

  // Update user profile (displayName)
  async function updateUserProfile(displayName) {
    const token = getToken();
    if (!token) throw new Error('Not authenticated');
    // You can implement a PATCH endpoint in backend for this; for now, just update local state
    setCurrentUser((prev) => ({ ...prev, displayName }));
  }

  // Fetch current user if token exists
  useEffect(() => {
    const token = getToken();
    if (!token) {
      setLoading(false);
      return;
    }
    fetch(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(async (res) => {
        if (!res.ok) throw new Error('Invalid token');
        const data = await res.json();
        setCurrentUser(data.user);
      })
      .catch(() => {
        setToken(null);
        setCurrentUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
} 
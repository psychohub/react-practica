import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  getCredentialsFromStorage,
  setCredentialsInStorage,
  clearCredentialsFromStorage,
} from '../../utils/credentialsHelper';
import {
  setAuthorizationHeader,
  removeAuthorizationHeader,
} from '../../api/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [credentials, setCredentials] = useState(getCredentialsFromStorage());

  useEffect(() => {
    const handleStorageChange = () => {
      setCredentials(getCredentialsFromStorage());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {
    if (credentials) {
      setAuthorizationHeader(credentials.token);
    } else {
      removeAuthorizationHeader();
    }
  }, [credentials]);

  const saveCredentials = (newCredentials, rememberMe) => {
    setCredentials(newCredentials);
    if (rememberMe) {
      setCredentialsInStorage(newCredentials);
    } else {
      clearCredentialsFromStorage();
    }
  };

  const logout = () => {
    setCredentials(null);
    clearCredentialsFromStorage();
  };

  const isAuthenticated = () => {
    return credentials !== null;
  };

  return (
    <AuthContext.Provider
      value={{ credentials, saveCredentials, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

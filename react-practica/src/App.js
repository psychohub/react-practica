import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdvertsPage from './pages/AdvertsPage';
import AdvertPage from './pages/AdvertPage';
import NewAdvertPage from './pages/NewAdvertPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';

const App = () => {
  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };

  const location = useLocation();

  return (
    <div>
      {isAuthenticated() && <Navbar />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/adverts"
          element={
            <RequireAuth>
              <AdvertsPage />
            </RequireAuth>
          }
        />
        <Route
          path="/adverts/:id"
          element={
            <RequireAuth>
              <AdvertPage />
            </RequireAuth>
          }
        />
        <Route
          path="/adverts/new"
          element={
            <RequireAuth>
              <NewAdvertPage />
            </RequireAuth>
          }
        />
        <Route path="/" element={<Navigate to="/adverts" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

const RequireAuth = ({ children }) => {
  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default App;

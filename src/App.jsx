import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { UserDashboard } from './pages/UserDashboard';
import { RecyclerDashboard } from './pages/RecyclerDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { Login } from './pages/Login';
import { PickupRequest } from './pages/PickupRequest';
import { PickupStatus } from './pages/PickupStatus';
import { RecyclerStatus } from './pages/RecyclerStatus';
import { Marketplace } from './pages/Marketplace';
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('login');
  const [isDark, setIsDark] = useState(false);

  const handleLogin = (role) => {
    setCurrentUser({ role });
    setCurrentPage(`${role}-dashboard`);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('login');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleBack = () => {
    if (currentUser) {
      setCurrentPage(`${currentUser.role}-dashboard`);
    } else {
      setCurrentPage('login');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login onLogin={handleLogin} />;
      case 'user-dashboard':
        return <UserDashboard onLogout={handleLogout} onNavigate={handleNavigate} />;
      case 'recycler-dashboard':
        return <RecyclerDashboard onLogout={handleLogout} onNavigate={handleNavigate} />;
      case 'admin-dashboard':
        return <AdminDashboard onLogout={handleLogout} onNavigate={handleNavigate} />;
      case 'pickup-request':
        return <PickupRequest onLogout={handleLogout} onBack={handleBack}  onNavigate={handleNavigate}/>;
      case 'pickup-route':
        return <PickupStatus onBack={handleBack} onLogout={handleLogout}/>;        
      case 'recycler-route':
        return <RecyclerStatus onBack={handleBack} onLogout={handleLogout}/>;  
      case 'marketplace':
        return (
          <Marketplace
            onLogout={handleLogout}
            onBack={handleBack}
            currentUser={currentUser}
          />
        );
      default:
        return <Login onLogin={handleLogin} />;
    }
  };

  return (
    <div className={`flex flex-col min-h-screen ${isDark ? 'dark' : ''}`}>
      {currentUser && (
        <Navbar
          role={currentUser.role}
          isDark={isDark}
          onDarkToggle={() => setIsDark(!isDark)}
          onLogout={handleLogout}
          onNavigate={handleNavigate}
        />
      )}
      <div className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 pt-6">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
};

export default App;
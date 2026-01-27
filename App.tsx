import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import DashboardPage from './components/DashboardPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'login' | 'signup' | 'dashboard'>('login');

  return (
    <div className="w-full h-screen">
      {currentPage === 'login' && (
        <LoginPage 
          onNavigateToSignup={() => setCurrentPage('signup')} 
          onLoginSuccess={() => setCurrentPage('dashboard')}
        />
      )}
      {currentPage === 'signup' && (
        <SignupPage 
          onNavigateToLogin={() => setCurrentPage('login')} 
          onSignupSuccess={() => setCurrentPage('dashboard')}
        />
      )}
      {currentPage === 'dashboard' && (
        <DashboardPage />
      )}
    </div>
  );
};

export default App;
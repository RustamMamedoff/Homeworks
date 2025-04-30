import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import Login from './components/Login';
import Register from './components/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      setIsAuthenticated(true);
    } else if (path === '/') {
      navigate('/login');
    }
  }, [path]);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setPath(to);
  };

  const handleLogin = () => {
    localStorage.setItem('loggedInUser', 'true');
    setIsAuthenticated(true);
    toast.success('Logged in!');
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setIsAuthenticated(false);
    toast.info('Logged out!');
    navigate('/login');
  };

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    if (path === '/') return isAuthenticated ? <TodoList /> : null;
    if (path === '/about') return <div>About</div>;
    if (path === '/contact') return <div>Contact</div>;
    if (path === '/login') return <Login onLogin={handleLogin} />;
    if (path === '/register') return <Register />;
    return <div>404 - Page Not Found</div>;
  };

  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} onNavigate={navigate} />
      <ToastContainer />
      {renderPage()}
    </div>
  );
};

export default App;

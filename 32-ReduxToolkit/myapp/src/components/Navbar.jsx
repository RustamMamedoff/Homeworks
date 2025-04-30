import React from 'react';

const Navbar = ({ isAuthenticated, onLogout, onNavigate }) => {
  return (
    <nav style={{ display: 'flex', gap: '10px', padding: '10px' }}>
      <button onClick={() => onNavigate('/')}>Home</button>
      <button onClick={() => onNavigate('/about')}>About</button>
      <button onClick={() => onNavigate('/contact')}>Contact</button>
      {!isAuthenticated ? (
        <>
          <button onClick={() => onNavigate('/login')}>Login</button>
          <button onClick={() => onNavigate('/register')}>Register</button>
        </>
      ) : (
        <button onClick={onLogout}>Logout</button>
      )}
    </nav>
  );
};

export default Navbar;



import React from 'react';
import './Header.css';

const Header = ({ onDarkModeToggle, isDarkMode }) => {
  return (
    <header className="header">
      <div className="header-left">SocialFlow</div>
      <div className="header-right">
        <button className="profile-button">Profile</button>
        <button className="help-button">Help</button>
        <button onClick={onDarkModeToggle} className="theme-toggle">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default Header;






import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onDarkModeToggle, onOpenProfile, onOpenHelp }) => {
  return (
    <header className="header">
      <div className="header-left">SocialFlow</div>
      <div className="header-right">
        <button onClick={onOpenProfile}>
          <FontAwesomeIcon icon={faUser} /> Profile
        </button>
        <button onClick={onOpenHelp}>
          <FontAwesomeIcon icon={faQuestionCircle} /> Help
        </button>
        <button className="theme-toggle" onClick={onDarkModeToggle}>
          Toggle Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;








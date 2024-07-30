import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faQuestionCircle, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onDarkModeToggle, isDarkMode }) => {
  return (
    <header className="header">
      <div className="header-left">SocialFlow</div>
      <div className="header-right">
        <button>
          <FontAwesomeIcon icon={faUser} /> Profile
        </button>
        <button>
          <FontAwesomeIcon icon={faQuestionCircle} /> Help
        </button>
        <button onClick={onDarkModeToggle}>
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} /> Toggle Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;







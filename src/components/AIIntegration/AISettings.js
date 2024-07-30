import React from 'react';
import './AISettings.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

const AISettings = () => {
  return (
    <div className="ai-settings">
      <h1><FontAwesomeIcon icon={faBrain} /> AI Settings</h1>
      <p>Configure your AI integration here.</p>
    </div>
  );
};

export default AISettings;



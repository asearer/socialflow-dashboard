import React from 'react';
import './Help.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Help = ({ onClose }) => {
  return (
    <div className="help">
      <button className="close-btn" onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <h1>Help</h1>
      <p>Help and support information.</p>
    </div>
  );
};

export default Help;


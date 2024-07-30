import React from 'react';
import './TemplateLibrary.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

const TemplateLibrary = () => {
  return (
    <div className="template-library">
      <h1><FontAwesomeIcon icon={faFileAlt} /> Template Library</h1>
      <p>Explore and manage your templates.</p>
    </div>
  );
};

export default TemplateLibrary;


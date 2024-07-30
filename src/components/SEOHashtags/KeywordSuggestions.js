import React from 'react';
import './KeywordSuggestions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

const KeywordSuggestions = () => {
  return (
    <div className="keyword-suggestions">
      <h1><FontAwesomeIcon icon={faHashtag} /> Keyword Suggestions</h1>
      <p>Generate and manage keyword suggestions here.</p>
    </div>
  );
};

export default KeywordSuggestions;



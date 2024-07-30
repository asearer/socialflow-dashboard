import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Profile = ({ onClose }) => {
  return (
    <div className="profile">
      <button className="close-btn" onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <h1>Profile</h1>
      <p>Details about the user.</p>
    </div>
  );
};

export default Profile;



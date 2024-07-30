import React from 'react';
import './NotificationSettings.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const NotificationSettings = () => {
  return (
    <div className="notification-settings">
      <h1><FontAwesomeIcon icon={faBell} /> Notification Settings</h1>
      <p>Adjust your notification preferences here.</p>
    </div>
  );
};

export default NotificationSettings;


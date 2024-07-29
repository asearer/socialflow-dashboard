// Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onPageChange }) => {
  return (
    <div className="sidebar">
      <h2>SocialFlow</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/message-automation">Message Automation</a></li>
        <li><a href="/ai-integration">AI Integration</a></li>
        <li><a href="/templates">Templates</a></li>
        <li><a href="/notifications">Notifications</a></li>
        <li><a href="/seo-hashtags">SEO & Hashtags</a></li>
        <li><a href="/analytics">Analytics</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;




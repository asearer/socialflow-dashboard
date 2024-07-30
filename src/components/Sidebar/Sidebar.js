import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCogs, faBrain, faFileAlt, faBell, faHashtag, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li>
          <Link to="/message-automation">
            <FontAwesomeIcon icon={faCogs} /> Workflow Editor
          </Link>
        </li>
        <li>
          <Link to="/ai-integration">
            <FontAwesomeIcon icon={faBrain} /> AI Integration
          </Link>
        </li>
        <li>
          <Link to="/templates">
            <FontAwesomeIcon icon={faFileAlt} /> Template Library
          </Link>
        </li>
        <li>
          <Link to="/notifications">
            <FontAwesomeIcon icon={faBell} /> Notification Settings
          </Link>
        </li>
        <li>
          <Link to="/seo-hashtags">
            <FontAwesomeIcon icon={faHashtag} /> SEO Hashtags
          </Link>
        </li>
        <li>
          <Link to="/analytics">
            <FontAwesomeIcon icon={faChartLine} /> Analytics Dashboard
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;





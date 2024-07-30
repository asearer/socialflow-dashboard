import React from 'react';
import './AnalyticsDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

const AnalyticsDashboard = () => {
  return (
    <div className="analytics-dashboard">
      <h1><FontAwesomeIcon icon={faChartLine} /> Analytics Dashboard</h1>
      <p>View and analyze your data here.</p>
    </div>
  );
};

export default AnalyticsDashboard;



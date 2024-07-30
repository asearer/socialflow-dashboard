import React from 'react';
import './AnalyticsDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import D3ChartComponent from './D3ChartComponent'; // Import the D3 chart component

const AnalyticsDashboard = () => {
    return (
        <div className="analytics-dashboard">
            <h1>
                
                Analytics Dashboard
            </h1>
            <p>View and analyze your data here.</p>
            <D3ChartComponent /> {/* Include the D3 chart component here */}
        </div>
    );
};

export default AnalyticsDashboard;







import React, { useState } from 'react';
import './AnalyticsDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import D3ChartComponent from './D3ChartComponent'; // Import the D3 chart component

const AnalyticsDashboard = () => {
    const [timeframe, setTimeframe] = useState('daily');

    return (
        <div className="analytics-dashboard">
            <h1> Analytics Dashboard</h1>
            <p>View and analyze your data here.</p>
            <div>
                <button onClick={() => setTimeframe('daily')}>Daily</button>
                <button onClick={() => setTimeframe('weekly')}>Weekly</button>
                <button onClick={() => setTimeframe('monthly')}>Monthly</button>
                <button onClick={() => setTimeframe('yearly')}>Yearly</button>
            </div>
            <D3ChartComponent timeframe={timeframe} /> {/* Include the D3 chart component here */}
        </div>
    );
};

export default AnalyticsDashboard;








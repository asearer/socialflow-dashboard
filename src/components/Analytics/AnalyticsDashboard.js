// AnalyticsDashboard.js
import React, { useState, useEffect } from 'react';
import './AnalyticsDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import D3ChartComponent from './D3ChartComponent';
import { fetchAnalyticsData } from './analyticsApi';

const AnalyticsDashboard = () => {
    const [timeframe, setTimeframe] = useState('daily');
    const [chartType, setChartType] = useState('bar');
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const fetchedData = await fetchAnalyticsData(timeframe);
            setData(fetchedData);
        };
        loadData();
    }, [timeframe]);

    return (
        <div className="analytics-dashboard">
            <h1> Analytics Dashboard</h1>
            <p>View and analyze your data here.</p>
            <div>
                <button onClick={() => setTimeframe('daily')}>Daily</button>
                <button onClick={() => setTimeframe('weekly')}>Weekly</button>
                <button onClick={() => setTimeframe('monthly')}>Monthly</button>
                <button onClick={() => setTimeframe('yearly')}>Yearly</button>
                <button onClick={() => setChartType(chartType === 'bar' ? 'line' : 'bar')}>
                    Toggle to {chartType === 'bar' ? 'Line' : 'Bar'} Chart
                </button>
            </div>
            <D3ChartComponent data={data} chartType={chartType} />
        </div>
    );
};

export default AnalyticsDashboard;









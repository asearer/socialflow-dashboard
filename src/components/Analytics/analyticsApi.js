// Mock function for fetching data
export const fetchAnalyticsData = async (timeframe) => {
    // Replace with actual API call
    switch (timeframe) {
        case 'daily':
            return [
                { label: 'Mon', value: 30 },
                { label: 'Tue', value: 80 },
                { label: 'Wed', value: 45 },
                { label: 'Thu', value: 60 },
                { label: 'Fri', value: 20 },
                { label: 'Sat', value: 90 },
                { label: 'Sun', value: 75 }
            ];
        case 'weekly':
            return [
                { label: 'Week 1', value: 150 },
                { label: 'Week 2', value: 200 },
                { label: 'Week 3', value: 175 },
                { label: 'Week 4', value: 225 },
            ];
        case 'monthly':
            return [
                { label: 'Jan', value: 30 },
                { label: 'Feb', value: 80 },
                { label: 'Mar', value: 45 },
                { label: 'Apr', value: 60 },
                { label: 'May', value: 20 },
                { label: 'Jun', value: 90 },
                { label: 'Jul', value: 110 },
                { label: 'Aug', value: 120 },
                { label: 'Sep', value: 95 },
                { label: 'Oct', value: 105 },
                { label: 'Nov', value: 65 },
                { label: 'Dec', value: 85 },
            ];
        case 'yearly':
            return [
                { label: '2020', value: 1200 },
                { label: '2021', value: 1400 },
                { label: '2022', value: 1300 },
                { label: '2023', value: 1500 },
                { label: '2024', value: 1600 },
            ];
        default:
            return [];
    }
};



import axios from 'axios';

// Replace with your actual SerpApi API key
const SERPAPI_API_KEY = '';
const SERPAPI_ENDPOINT = 'https://serpapi.com/search';

// Fetch keyword and hashtag suggestions from SerpApi
export const fetchSerpApiData = async (query) => {
    try {
        const response = await axios.get(SERPAPI_ENDPOINT, {
            params: {
                api_key: SERPAPI_API_KEY,
                q: query,
                engine: 'google', // You can specify other engines if needed
                // Add other relevant parameters here
            },
        });

        // Process the data as needed
        return {
            seo: response.data.organic_results.map(result => result.title),
            hashtags: response.data.related_queries.map(query => `#${query.query.replace(/\s+/g, '')}`)
        };
    } catch (error) {
        console.error('Error fetching data from SerpApi:', error);
        return { seo: [], hashtags: [] };
    }
};




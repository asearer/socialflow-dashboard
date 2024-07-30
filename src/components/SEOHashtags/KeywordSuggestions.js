import React, { useState } from 'react';
import './KeywordSuggestions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { fetchSerpApiData } from './keywordApi'; // Import the SerpApi function

// Helper function to preprocess and rank suggestions
const preprocessAndRankData = (data) => {
    return data.reduce((acc, item) => {
        acc[item] = Math.random(); // Random score for demonstration
        return acc;
    }, {});
};

// Helper function to fetch and aggregate data
const fetchAndAggregateData = async (userInput) => {
    const { seo, hashtags } = await fetchSerpApiData(userInput);

    const allData = {
        seo,
        hashtags
    };

    // Process and rank data
    const recommendations = {};
    for (const [source, data] of Object.entries(allData)) {
        recommendations[source] = preprocessAndRankData(data);
    }

    return recommendations;
};

const KeywordSuggestions = () => {
    const [userInput, setUserInput] = useState('');
    const [recommendations, setRecommendations] = useState(null);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleRecommend = async () => {
        const result = await fetchAndAggregateData(userInput);
        setRecommendations(result);
    };

    return (
        <div className="keyword-suggestions">
            <h1><FontAwesomeIcon icon={faHashtag} /> Keyword Suggestions</h1>
            <p>Generate and manage keyword suggestions here.</p>

            <input
                type="text"
                placeholder="Enter your topic or keyword"
                value={userInput}
                onChange={handleInputChange}
            />
            <button onClick={handleRecommend}>Get Recommendations</button>

            {recommendations && (
                <div className="recommendations">
                    {Object.entries(recommendations).map(([source, items]) => (
                        <div key={source}>
                            <h2>{source.charAt(0).toUpperCase() + source.slice(1)}</h2>
                            <ul>
                                {Object.entries(items).map(([item, score]) => (
                                    <li key={item}>
                                        {item} (Score: {score.toFixed(2)})
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default KeywordSuggestions;








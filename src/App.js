import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import WorkflowEditor from './components/MessageAutomation/WorkflowEditor';
import AISettings from './components/AIIntegration/AISettings';
import TemplateLibrary from './components/Templates/TemplateLibrary';
import NotificationSettings from './components/Notifications/NotificationSettings';
import KeywordSuggestions from './components/SEOHashtags/KeywordSuggestions';
import AnalyticsDashboard from './components/Analytics/AnalyticsDashboard';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for theme preference
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode === 'true';
  });

  useEffect(() => {
    // Apply dark mode based on state
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    // Save theme preference to local storage
    localStorage.setItem('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <Router>
      <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Sidebar />
        <div className="main-content">
          <Header onDarkModeToggle={toggleDarkMode} isDarkMode={darkMode} />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/message-automation" element={<WorkflowEditor />} />
            <Route path="/ai-integration" element={<AISettings />} />
            <Route path="/templates" element={<TemplateLibrary />} />
            <Route path="/notifications" element={<NotificationSettings />} />
            <Route path="/seo-hashtags" element={<KeywordSuggestions />} />
            <Route path="/analytics" element={<AnalyticsDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;











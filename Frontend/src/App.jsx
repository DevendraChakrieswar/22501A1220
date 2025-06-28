import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UrlShortener from './components/UrlShortener';
import UrlStatistics from './components/UrlStatistics';
import RedirectPage from './components/RedirectPage'; // ⬅️ new

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <h1>React URL Shortener</h1>
            <UrlShortener />
            <UrlStatistics />
          </>
        } />
        <Route path="/:shortCode" element={<RedirectPage />} />
      </Routes>
    </Router>
  );
}

export default App;

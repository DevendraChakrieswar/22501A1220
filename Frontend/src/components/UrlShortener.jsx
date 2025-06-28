import React, { useState, useEffect } from 'react';
import { log } from '../../../LogginMiddleware/log';
import './UrlShortener.css';

const UrlShortener = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('shortenedUrls')) || [];
    setShortenedUrls(stored);
  }, []);

  const generateShortCode = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  };

  const handleShorten = async () => {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      const msg = "Please enter valid URLs starting with http/https";
      setError(msg);
      await log("frontend", "error", { package: "handler", message: msg });
      return;
    }

    const shortCode = generateShortCode();
    const shortUrl = `http://localhost:3000/${shortCode}`;

    const newEntry = { original: url, code: shortCode, short: shortUrl, createdAt: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem("shortenedUrls")) || [];
    const updated = [...existing, newEntry];

    localStorage.setItem("shortenedUrls", JSON.stringify(updated));
    setShortenedUrls(updated);
    setUrl('');
    setError('');
    await log("frontend", "info", { package: "handler", message: `Shortened ${url} to ${shortUrl}` });
  };

  return (
    <div className="shortener-container">
      <h2 className="section-title">➤ Shorten a URL</h2>
      <div className="input-group">
        <input
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="Enter long URL"
        />
        <button onClick={handleShorten}>Shorten</button>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default UrlShortener;

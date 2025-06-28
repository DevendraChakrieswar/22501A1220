import React from 'react';
import './UrlStatistics.css';

const UrlStatistics = () => {
  const stats = JSON.parse(localStorage.getItem("shortenedUrls")) || [];

  return (
    <div className="stats-container">
      <h2 className="section-title">📈 URL Statistics</h2>
      {stats.length === 0 ? <p>No shortened URLs yet.</p> : null}
      {stats.map((stat, i) => (
        <div key={i} className="stat-card">
          <p><strong>Short URL:</strong> <a href={stat.short} target="_blank" rel="noreferrer">{stat.short}</a></p>
          <p><strong>Original URL:</strong> {stat.original}</p>
          <p><strong>Created:</strong> {new Date(stat.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default UrlStatistics;


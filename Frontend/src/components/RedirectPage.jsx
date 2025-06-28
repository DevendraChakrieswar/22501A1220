import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RedirectPage = () => {
  const { shortCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const urls = JSON.parse(localStorage.getItem("shortenedUrls")) || [];
    const found = urls.find(entry => entry.code === shortCode);

    if (found) {
      window.location.href = found.original;
    } else {
      alert("Short URL not found or expired.");
      navigate("/");
    }
  }, [shortCode, navigate]);

  return <p>Redirecting...</p>;
};

export default RedirectPage;

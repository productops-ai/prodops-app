import React from 'react';
import './PRDResultPage.css'
import { useLocation } from 'react-router-dom';

function PRDResultPage() {
  const location = useLocation();
  const { prdResult } = location.state || {};  // Access the PRD result from route state

  if (!prdResult || !prdResult.prd) {
    return <p>No PRD result to display</p>;
  }

  // Split the PRD content into paragraphs based on the new lines for formatting
  const prdContent = prdResult.prd.split('\n').map((line, index) => (
    <p key={index}>{line}</p>  // Render each line as a separate paragraph
  ));

  return (
    <div className="prd-content">
      <h1>PRD Result</h1>
      <div>{prdContent}</div>
    </div>
  );
}

export default PRDResultPage;

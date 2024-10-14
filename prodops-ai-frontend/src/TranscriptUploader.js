import React, { useState } from 'react';

function TranscriptUploader() {
  const [file, setFile] = useState(null);
  const [insights, setInsights] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target.result;
        // Simulating processing of file contents to extract insights
        const extractedInsights = processTranscript(contents);
        setInsights(extractedInsights);
      };
      reader.readAsText(file);
    } else {
      alert('Please select a file to upload.');
    }
  };

  const processTranscript = (contents) => {
    // Simulating extraction of key insights from the transcript
    // Replace this with actual processing logic or API calls
    return [
      'Key Point 1: Discussed project roadmap.',
      'Key Point 2: Agreed on the UX design direction.',
      'Key Point 3: Highlighted the need for better data integration.',
    ];
  };

  return (
    <div>
      <section id="upload-section">
        <h2>Upload Transcript</h2>
        <input type="file" onChange={handleFileChange} accept=".txt,.pdf" />
        <button onClick={handleUpload}>Upload</button>
      </section>
      
      <section id="insights-section">
        <h2>Insights</h2>
        <div id="insights-display">
          {insights.length > 0 ? (
            insights.map((insight, index) => (
              <p key={index}>{insight}</p>
            ))
          ) : (
            <p>Your insights will appear here after the file is processed.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default TranscriptUploader;

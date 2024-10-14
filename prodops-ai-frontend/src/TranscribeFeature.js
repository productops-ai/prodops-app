import React, { useState, useEffect } from 'react';

function TranscribeFeature() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [recognition, setRecognition] = useState(null);

  // Initialize the Web Speech API
  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Your browser does not support speech recognition. Please try Chrome.');
      return;
    }
    
    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.continuous = true;
    recognitionInstance.interimResults = true;
    recognitionInstance.lang = 'en-US';

    recognitionInstance.onresult = (event) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setTranscription(transcript);
    };

    recognitionInstance.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsRecording(false);
    };

    setRecognition(recognitionInstance);
  }, []);

  const handleStartRecording = () => {
    if (recognition) {
      setIsRecording(true);
      recognition.start();
      setTranscription('Listening...');
    }
  };

  const handleStopRecording = () => {
    if (recognition) {
      setIsRecording(false);
      recognition.stop();
      setTranscription((prev) => prev + ' (Recording stopped.)');
    }
  };

  return (
    <div id="transcribe-section" className="subsection">
      <h2>Transcribe with Microphone</h2>
      <button
        className="styled-button"
        onClick={isRecording ? handleStopRecording : handleStartRecording}
      >
        {isRecording ? 'Stop Transcription' : 'Start Transcription'}
      </button>
      <textarea
        className="transcription-box"
        value={transcription}
        readOnly
        placeholder="Your transcription will appear here..."
      />
    </div>
  );
}

export default TranscribeFeature;

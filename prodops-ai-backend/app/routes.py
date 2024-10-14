from flask import Flask, request, jsonify, Blueprint
import openai
import os
from flask_cors import CORS

app = Flask(__name__)
main = Blueprint('main', __name__)
CORS(main, supports_credentials=True)
# Set your OpenAI API key
# openai.api_key = '';

@main.route('/')
def index():
    return "Welcome to the PRD Generator API!"

@main.route('/upload-transcript', methods=['POST'])
def upload_transcript():
    # Check if a file is part of the request
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # Read the transcript from the file
    transcript = file.read().decode('utf-8')

    # Generate the PRD using OpenAI
    prd_content = generate_prd_from_transcript(transcript)

    return jsonify({'prd': prd_content})

def generate_prd_from_transcript(transcript):
    # Define a prompt that generates PRD content from the transcript
    prompt = f"""
    Based on the following customer interview transcript, generate a detailed Product Requirements Document (PRD):

    {transcript}

    The PRD should include the following sections:
    - Purpose
    - Executive Summary
    - Key Problems Identified
    - Objectives & Goals
    - Key Features
    - User Stories
    - Acceptance Criteria
    - Performance Metrics
    - Risks & Mitigations
    - Timeline
    - Conclusion

    Be as detailed as possible.
    """

    # Send the transcript to the OpenAI API for PRD generation using gpt-3.5-turbo or gpt-4
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  # or "gpt-4" if you have access
        messages=[
            {"role": "system", "content": "You are an AI that generates PRD documents based on transcripts."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=500  # Adjust token length as needed
    )

    # Get the PRD content from the OpenAI response
    prd_content = response['choices'][0]['message']['content'].strip()

    return prd_content


# PRONOUNCE

PRONOUNCE is a pronunciation assessment app. It will assist users in their language learning journey. 
The user can practice their pronunciation and get an assessment on what part of the word/sentence they need to improve on. 
With the app users can become more comfortable speaking a new language.

Currently four languages are available - English, Chinese, French and Spanish.

## Requirements

- React
- Node.js
- Microsoft Azure Speech KEY and REGION
- You might have to install ffmpeg(used for converting audio files) on your server. 

    Download link: https://ffmpeg.org/download.html#build-windows

    Please refer the following article for setup details: https://www.changsiang.net/dependancy-requirement-when-using-fluent-ffmpeg-in-nodejs-application/

## Setup

- clone the client and server repositories
    client : https://github.com/ChathurikaAJ/chathurika-jayakody-capstone
    server: https://github.com/ChathurikaAJ/chathurika-jayakody-capstone-API

- update process.env file
- run npm i on both repos
- run nodemon server.js on server repo
- run npm start on client repo

## How It Works

1. Select language, enter text, click start
2. On click, text sent to backend using axios POST 
    Backend:
    - Link user text and run Azure Speech SDK text-to-speech
    - Save incoming audio file on server
    - Audio file sent to frontend using express res.SendFile

3. Click speaker icon
4. On click, axios GET request sent for the audio file
5. An audiolink created (URL.createObjectURL) with the response data
6. Once link is ready, it will play the text-to-speech audio
7. Click record (mediaRecorder) and stop
8. On stop, audiolink created (URL.createObjectURL) and audio chunks sent to backend using axios POST (formData)
    Backend:
    - Save audio file (in webm format) using multer
    - Run fluent-ffmpeg to convert to wav format
    - Link wav audio and user text and run Azure Speech SDK speech-to-text
    - Save incoming JSON assessment on server

9. Click play to hear the recorded audio
10. Click results, axios GET request sent for the assessment
11. Once data received, the assessment details will be displayed
12. Click new text or try again







#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🎬 Netflix Clone Setup\n');
console.log('This script will help you set up your environment variables.\n');

const questions = [
  {
    name: 'firebaseApiKey',
    message: 'Enter your Firebase API Key: ',
    required: true
  },
  {
    name: 'firebaseAuthDomain',
    message: 'Enter your Firebase Auth Domain: ',
    required: true
  },
  {
    name: 'firebaseProjectId',
    message: 'Enter your Firebase Project ID: ',
    required: true
  },
  {
    name: 'firebaseStorageBucket',
    message: 'Enter your Firebase Storage Bucket: ',
    required: true
  },
  {
    name: 'firebaseMessagingSenderId',
    message: 'Enter your Firebase Messaging Sender ID: ',
    required: true
  },
  {
    name: 'firebaseAppId',
    message: 'Enter your Firebase App ID: ',
    required: true
  },
  {
    name: 'firebaseMeasurementId',
    message: 'Enter your Firebase Measurement ID (optional): ',
    required: false
  },
  {
    name: 'youtubeApiKey',
    message: 'Enter your YouTube API Key: ',
    required: true
  }
];

const answers = {};

function askQuestion(index) {
  if (index >= questions.length) {
    createEnvFile();
    return;
  }

  const question = questions[index];
  rl.question(question.message, (answer) => {
    if (question.required && !answer.trim()) {
      console.log('❌ This field is required. Please try again.\n');
      askQuestion(index);
      return;
    }
    
    answers[question.name] = answer.trim();
    askQuestion(index + 1);
  });
}

function createEnvFile() {
  const envContent = `# Firebase Configuration
VITE_FIREBASE_API_KEY=${answers.firebaseApiKey}
VITE_FIREBASE_AUTH_DOMAIN=${answers.firebaseAuthDomain}
VITE_FIREBASE_PROJECT_ID=${answers.firebaseProjectId}
VITE_FIREBASE_STORAGE_BUCKET=${answers.firebaseStorageBucket}
VITE_FIREBASE_MESSAGING_SENDER_ID=${answers.firebaseMessagingSenderId}
VITE_FIREBASE_APP_ID=${answers.firebaseAppId}
${answers.firebaseMeasurementId ? `VITE_FIREBASE_MEASUREMENT_ID=${answers.firebaseMeasurementId}` : ''}

# YouTube API Key
VITE_YOUTUBE_API_KEY=${answers.youtubeApiKey}
`;

  const envPath = path.join(process.cwd(), '.env');
  
  try {
    fs.writeFileSync(envPath, envContent);
    console.log('\n✅ .env file created successfully!');
    console.log('🚀 You can now run "npm run dev" to start the development server.\n');
  } catch (error) {
    console.error('❌ Error creating .env file:', error.message);
  }
  
  rl.close();
}

// Start the setup process
askQuestion(0); 
# Configuration Guide

This guide will help you set up the necessary API keys and configurations for the Netflix Clone.

## 🔥 Firebase Setup

### 1. Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter a project name (e.g., "netflix-clone")
4. Follow the setup wizard

### 2. Enable Authentication
1. In your Firebase project, go to "Authentication"
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password" provider
5. Save the changes

### 3. Get Firebase Config
1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click the web icon (</>)
4. Register your app with a nickname
5. Copy the config object

### 4. Update Firebase Configuration
Open `src/lib/firebase.js` and replace the placeholder values:

```javascript
const firebaseConfig = {
  apiKey: "your_actual_api_key",
  authDomain: "your_project.firebaseapp.com",
  projectId: "your_project_id",
  storageBucket: "your_project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

## 🎬 TMDB API Setup

### 1. Create TMDB Account
1. Go to [TMDB](https://www.themoviedb.org/)
2. Click "Sign Up" and create an account
3. Verify your email address

### 2. Get API Key
1. Go to [API Settings](https://www.themoviedb.org/settings/api)
2. Click "Click to generate" under "API Read Access Token (v4 auth)"
3. Copy the generated API key

### 3. Update TMDB Configuration
Open `src/contexts/MovieContext.jsx` and replace:

```javascript
const API_KEY = 'YOUR_TMDB_API_KEY'; // Replace with your actual API key
```

## 🔧 Environment Variables (Optional)

For better security, you can use environment variables:

1. Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef123456
VITE_TMDB_API_KEY=your_tmdb_api_key
```

2. Update the configuration files to use environment variables:

**In `src/lib/firebase.js`:**
```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

**In `src/contexts/MovieContext.jsx`:**
```javascript
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
```

## 🚀 Testing the Configuration

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Test authentication:
   - Go to `/signup` and create an account
   - Try logging in at `/login`

3. Test movie data:
   - Go to `/browse` to see if movies load
   - Try searching for movies
   - Click on a movie to see details

## 🔒 Security Notes

- Never commit your API keys to version control
- Use environment variables for production
- Keep your Firebase project settings secure
- Monitor your API usage to avoid rate limits

## 🆘 Troubleshooting

### Firebase Issues
- **Authentication not working**: Check if Email/Password is enabled
- **Config errors**: Verify all Firebase config values are correct
- **CORS errors**: Add your domain to Firebase authorized domains

### TMDB Issues
- **No movies loading**: Check if your API key is correct
- **Rate limiting**: TMDB has rate limits, consider caching
- **Image errors**: Some movies might not have poster images

### General Issues
- **Build errors**: Make sure all dependencies are installed
- **Runtime errors**: Check browser console for detailed error messages
- **Styling issues**: Ensure all CSS is properly imported

## 📞 Support

If you're still having issues:
1. Check the browser console for errors
2. Verify all API keys are correct
3. Ensure Firebase project is properly configured
4. Check network tab for API call failures 
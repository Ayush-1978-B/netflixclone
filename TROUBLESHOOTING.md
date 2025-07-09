# Troubleshooting Guide

## Common Issues and Solutions

### 🔥 Firebase Authentication Error

**Error:** `FirebaseError: Firebase: Error (auth/invalid-api-key)`

**Cause:** Missing or invalid environment variables

**Solution:**
1. Make sure you have a `.env` file in the root directory
2. Run the setup script: `npm run setup`
3. Or manually create `.env` file with the required variables:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

# YouTube API Key
VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
```

### 🚀 Development Server Issues

**Error:** `Cannot find module` or import errors

**Solution:**
1. Make sure all dependencies are installed: `npm install`
2. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
3. Check if the `.env` file exists and has correct values

### 📱 Build Issues

**Error:** Build fails with environment variable errors

**Solution:**
1. Ensure all environment variables are set in `.env`
2. Check that variable names start with `VITE_`
3. Restart the development server after changing `.env`

### 🔧 Setup Script Issues

**Error:** `require is not defined in ES module scope`

**Solution:**
1. The setup script has been updated to use ES modules
2. If you encounter this error, run: `node setup.js` directly
3. Or manually create the `.env` file using the template above

### 🌐 API Issues

**Error:** YouTube API quota exceeded or invalid key

**Solution:**
1. Check your YouTube API key in the `.env` file
2. Verify the API key is valid in Google Cloud Console
3. Check if you've exceeded your daily quota
4. Enable YouTube Data API v3 in your Google Cloud project

### 🔒 Environment Variables Not Loading

**Issue:** Environment variables not being read by Vite

**Solution:**
1. Make sure variable names start with `VITE_`
2. Restart the development server after changing `.env`
3. Check that `.env` file is in the root directory
4. Verify no typos in variable names

### 📦 Package Installation Issues

**Error:** `npm install` fails

**Solution:**
1. Clear npm cache: `npm cache clean --force`
2. Delete package-lock.json: `rm package-lock.json`
3. Reinstall: `npm install`
4. If using Node.js 18+, try: `npm install --legacy-peer-deps`

### 🎯 Quick Fixes

**For immediate resolution:**
1. Stop the development server (Ctrl+C)
2. Create/update `.env` file with correct values
3. Run `npm install` to ensure dependencies are up to date
4. Start the server: `npm run dev`

**For persistent issues:**
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install`
3. Create fresh `.env` file using `npm run setup`
4. Start development server

### 📞 Getting Help

If you continue to experience issues:

1. Check the console for specific error messages
2. Verify all environment variables are set correctly
3. Ensure you're using the latest version of Node.js
4. Check that all dependencies are compatible

### 🔍 Debug Mode

To enable debug mode and see more detailed error messages:

```bash
# Set debug environment variable
export DEBUG=*  # On Unix/Linux/Mac
set DEBUG=*     # On Windows

# Run with debug logging
npm run dev
```

### 📋 Environment Checklist

Before running the application, ensure:

- [ ] `.env` file exists in root directory
- [ ] All Firebase configuration variables are set
- [ ] YouTube API key is valid and has quota
- [ ] All dependencies are installed (`npm install`)
- [ ] Development server is restarted after `.env` changes 
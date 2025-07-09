# Netflix Clone

A modern, responsive Netflix clone built with React, featuring real movie data from TMDB API, user authentication with Firebase, and a beautiful Netflix-inspired UI.

![Netflix Clone](https://img.shields.io/badge/React-19.1.0-blue)
![Netflix Clone](https://img.shields.io/badge/Firebase-10.8.0-orange)
![Netflix Clone](https://img.shields.io/badge/Styled--Components-6.1.8-pink)

## 🎬 Features

### Core Features
- **Real Movie Data**: Integrated with TMDB API for authentic movie information
- **User Authentication**: Firebase Authentication with email/password
- **Responsive Design**: Mobile-first approach with Netflix-style UI
- **Movie Browsing**: Browse trending, popular, top-rated, and upcoming movies
- **Search Functionality**: Search movies with real-time results
- **Movie Details**: Detailed movie pages with trailers, cast, and similar movies
- **User Profiles**: Manage account settings and preferences

### UI/UX Features
- **Hero Banners**: Dynamic movie banners with background images
- **Movie Rows**: Horizontal scrollable movie lists with hover effects
- **Smooth Animations**: Framer Motion animations throughout the app
- **Dark Theme**: Netflix-inspired dark color scheme
- **Loading States**: Beautiful loading animations and skeleton screens
- **Error Handling**: User-friendly error messages and fallbacks

### Technical Features
- **React Router**: Client-side routing with protected routes
- **Context API**: Global state management for auth and movies
- **Styled Components**: CSS-in-JS for maintainable styling
- **Firebase Integration**: Authentication and database capabilities
- **API Integration**: TMDB API for movie data
- **Responsive Design**: Works on all device sizes

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account
- TMDB API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   - Create a `.env` file in the root directory
   - Add the following environment variables:
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

4. **Set up Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication (Email/Password)
   - Get your Firebase config and add it to the `.env` file

5. **Set up YouTube API**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable YouTube Data API v3
   - Create credentials (API Key)
   - Add the API key to the `.env` file

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   - Navigate to `http://localhost:5173`

## 📁 Project Structure

```
netflixclone/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation component
│   │   ├── MovieRow.jsx        # Horizontal movie list
│   │   ├── MovieCard.jsx       # Individual movie card
│   │   ├── HeroBanner.jsx      # Featured movie banner
│   │   └── TrailerPopup.jsx    # Trailer modal component
│   ├── contexts/
│   │   ├── AuthContext.jsx     # Authentication context
│   │   └── MovieContext.jsx    # Movie data context
│   ├── pages/
│   │   ├── Home.jsx           # Landing page
│   │   ├── Browse.jsx         # Main content page
│   │   ├── MovieDetail.jsx    # Movie details page
│   │   ├── Login.jsx          # Login page
│   │   ├── Signup.jsx         # Registration page
│   │   └── Profile.jsx        # User profile page
│   ├── styles/
│   │   └── GlobalStyles.js    # Global styles
│   ├── lib/
│   │   └── firebase.js        # Firebase configuration
│   ├── index.js               # Centralized imports
│   ├── App.jsx                # Main app component
│   └── main.jsx               # App entry point
├── .env.example               # Environment variables template
├── .gitignore                 # Git ignore rules
├── package.json
└── README.md
```

## 🎯 Key Components

### Authentication System
- **Login/Signup**: Secure user authentication with Firebase
- **Protected Routes**: Automatic redirection for unauthenticated users
- **User Profiles**: Manage account information and settings

### Movie Management
- **Movie Browsing**: Multiple categories (Trending, Popular, Top Rated, Upcoming)
- **Search**: Real-time movie search with TMDB API
- **Movie Details**: Comprehensive movie information with trailers
- **Similar Movies**: Recommendations based on current movie

### UI Components
- **Responsive Navbar**: Dynamic navigation with user menu
- **Movie Cards**: Interactive cards with hover effects
- **Hero Banners**: Featured content with background images
- **Loading States**: Smooth loading animations

## 🛠️ Technologies Used

- **Frontend**: React 19.1.0, Vite
- **Styling**: Styled Components, CSS3
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore (ready for implementation)
- **API**: TMDB (The Movie Database)
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Video Player**: React Player

## 📱 Responsive Design

The app is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Features in Detail

### Home Page
- Netflix-style landing page with hero section
- Feature highlights and call-to-action
- Smooth animations and transitions

### Browse Page
- Hero banner with featured movie
- Multiple movie categories
- Horizontal scrolling movie rows
- Search functionality

### Movie Detail Page
- Comprehensive movie information
- YouTube trailer integration
- Cast information
- Similar movies recommendations

### User Authentication
- Secure login/signup forms
- Password strength indicators
- Form validation
- Error handling

### Profile Management
- User profile editing
- Account statistics
- Settings management

## 🔒 Security Features

- Firebase Authentication
- Protected routes
- Input validation
- Error handling
- Secure API calls

## 🎨 Design System

### Colors
- Primary: #e50914 (Netflix Red)
- Background: #000 (Black)
- Secondary: #b3b3b3 (Gray)
- Success: #46d369 (Green)
- Warning: #f5c518 (Yellow)

### Typography
- Font Family: Netflix Sans, Helvetica Neue, Arial
- Responsive font sizes
- Consistent spacing

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables for Firebase and TMDB
4. Deploy

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for providing the movie API
- [Firebase](https://firebase.google.com/) for authentication and database
- [Netflix](https://netflix.com/) for the design inspiration
- [React Icons](https://react-icons.github.io/react-icons/) for the icon library

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Contact the maintainers

## 🔄 Updates

Stay updated with the latest features and improvements by:
- Starring the repository
- Watching for updates
- Following the project

---

**Note**: This is a demo project for educational purposes. Please respect the terms of service for TMDB and Firebase APIs.

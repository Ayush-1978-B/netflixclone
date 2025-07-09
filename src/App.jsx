import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { MovieProvider } from './contexts/MovieContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Browse from './pages/Browse';
import MovieDetail from './pages/MovieDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import TrailerPopup from './components/TrailerPopup';
import { GlobalStyles } from './styles/GlobalStyles';
import { useMovies } from './contexts/MovieContext';
import { useDocumentTitle } from './hooks/useDocumentTitle';

const TrailerPopupWrapper = () => {
  const { showTrailerPopup, selectedTrailer, closeTrailerPopup } = useMovies();
  
  return (
    <TrailerPopup
      isOpen={showTrailerPopup}
      trailer={selectedTrailer}
      onClose={closeTrailerPopup}
    />
  );
};

const AppContent = () => {
  useDocumentTitle();
  
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <TrailerPopupWrapper />
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          background: 'rgba(0,0,0,0.85)',
          color: '#e50914',
          fontWeight: 700,
          fontSize: '1.1rem',
          zIndex: 2000,
          overflow: 'hidden',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <div style={{
            whiteSpace: 'nowrap',
            display: 'inline-block',
            animation: 'marquee 12s linear infinite',
            paddingLeft: '100%',
          }}>
             NetflixClone is designed by Ayush Yadav &nbsp; • &nbsp; This NetflixClone is designed by Ayush Yadav &nbsp; • &nbsp; This NetflixClone is designed by Ayush Yadav NetflixClone is designed by Ayush Yadav &nbsp; • &nbsp; NetflixClone is designed by Ayush Yadav &nbsp; • &nbsp;
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
          `}</style>
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <MovieProvider>
        <Router>
          <AppContent />
        </Router>
      </MovieProvider>
    </AuthProvider>
  );
}

export default App;

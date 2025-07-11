// React and React Router
export { StrictMode } from 'react';
export { createRoot } from 'react-dom/client';
export { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation, useParams } from 'react-router-dom';

// Styled Components
export { default as styled } from 'styled-components';

// Framer Motion
export { motion, AnimatePresence } from 'framer-motion';

// React Icons
export { 
  FaPlay, 
  FaInfoCircle, 
  FaPlus, 
  FaCheck, 
  FaChevronLeft, 
  FaChevronRight,
  FaEye, 
  FaEyeSlash, 
  FaEnvelope, 
  FaLock, 
  FaUser,
  FaEdit, 
  FaSave, 
  FaTimes, 
  FaSignOutAlt, 
  FaCog,
  FaSearch, 
  FaBell, 
  FaBars,
  FaVolumeUp, 
  FaVolumeMute,
  FaStar, 
  FaClock, 
  FaCalendar
} from 'react-icons/fa';

// Contexts
export { AuthProvider, useAuth } from './contexts/AuthContext';
export { MovieProvider, useMovies } from './contexts/MovieContext';

// Components
export { default as Navbar } from './components/Navbar';
export { default as MovieCard } from './components/MovieCard';
export { default as MovieRow } from './components/MovieRow';
export { default as HeroBanner } from './components/HeroBanner';
export { default as TrailerPopup } from './components/TrailerPopup';

// Pages
export { default as Home } from './pages/Home';
export { default as Browse } from './pages/Browse';
export { default as MovieDetail } from './pages/MovieDetail';
export { default as Login } from './pages/Login';
export { default as Signup } from './pages/Signup';
export { default as Profile } from './pages/Profile';

// Styles
export { GlobalStyles } from './styles/GlobalStyles';

// Hooks
export { useDocumentTitle, useCustomTitle } from './hooks/useDocumentTitle'; 
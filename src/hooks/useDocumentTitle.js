import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useDocumentTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const getPageTitle = (pathname) => {
      switch (pathname) {
        case '/':
          return 'Netflix Clone - Watch Movies & TV Shows';
        case '/browse':
          return 'Browse - Netflix Clone';
        case '/login':
          return 'Sign In - Netflix Clone';
        case '/signup':
          return 'Sign Up - Netflix Clone';
        case '/profile':
          return 'Profile - Netflix Clone';
        default:
          if (pathname.startsWith('/movie/')) {
            // Don't set title here as MovieDetail component will handle it
            return null;
          }
          return 'Netflix Clone';
      }
    };

    const title = getPageTitle(location.pathname);
    if (title) {
      document.title = title;
    }
  }, [location.pathname]);
};

// Hook for setting custom titles
export const useCustomTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);
}; 
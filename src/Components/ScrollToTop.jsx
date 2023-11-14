import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top when the pathname changes
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Use smooth scroll behavior
      });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
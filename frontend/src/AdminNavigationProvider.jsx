import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Provider that intercepts navigation and adds /dashboard prefix
export const AdminNavigationProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Intercept all anchor tag clicks (including React Router NavLinks)
    const handleClick = (e) => {
      let target = e.target;
      
      // Find the closest anchor tag or element with data attribute
      while (target && target.tagName !== 'A' && !target.hasAttribute('data-router-link')) {
        target = target.parentElement;
      }
      
      if (!target) return;
      
      // Check for href attribute
      const href = target.getAttribute('href');
      if (!href) {
        // Check if it's a React Router link (might not have href)
        const routerLink = target.closest('[data-router-link]') || target.closest('a');
        if (routerLink) {
          // Try to find the to attribute or href
          const to = routerLink.getAttribute('data-to') || routerLink.getAttribute('href');
          if (to === '/' && location.pathname.startsWith('/dashboard')) {
            e.preventDefault();
            e.stopPropagation();
            navigate('/dashboard', { replace: true });
            return false;
          }
        }
        return;
      }

      // If we're in the admin section (/dashboard)
      if (location.pathname.startsWith('/dashboard')) {
        // Handle root path - redirect to /dashboard
        if (href === '/' || href === '') {
          e.preventDefault();
          e.stopPropagation();
          navigate('/dashboard', { replace: true });
          return false;
        }
        
        // Check if it's an internal route that needs /dashboard prefix
        if (href.startsWith('/') && 
            !href.startsWith('/dashboard') && 
            !href.startsWith('/login') && 
            !href.startsWith('/site')) {
          e.preventDefault();
          e.stopPropagation();
          navigate(`/dashboard${href}`);
          return false;
        }
      }
    };

    // Use capture phase to catch events early, before React Router handles them
    document.addEventListener('click', handleClick, true);
    
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [navigate, location]);

  // Also intercept location changes
  useEffect(() => {
    if (location.pathname === '/' && !location.pathname.startsWith('/dashboard')) {
      // If somehow we navigated to root, redirect to dashboard if we were in admin
      const wasInAdmin = sessionStorage.getItem('wasInAdmin') === 'true';
      if (wasInAdmin) {
        navigate('/dashboard', { replace: true });
      }
    } else if (location.pathname.startsWith('/dashboard')) {
      sessionStorage.setItem('wasInAdmin', 'true');
    }
  }, [location, navigate]);

  return <>{children}</>;
};

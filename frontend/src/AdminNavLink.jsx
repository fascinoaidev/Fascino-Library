import { NavLink as OriginalNavLink, useLocation } from "react-router-dom";

// Custom NavLink that automatically prefixes /dashboard to admin routes
export const NavLink = ({ to, ...props }) => {
  const location = useLocation();
  
  // If we're in the admin section and the link is an absolute path starting with /
  // and it's not already prefixed with /dashboard, /login, or /site, add /dashboard prefix
  let prefixedTo = to;
  if (location.pathname.startsWith('/dashboard')) {
    if (typeof to === 'string' && to.startsWith('/') && 
        !to.startsWith('/dashboard') && 
        !to.startsWith('/login') && 
        !to.startsWith('/site') &&
        to !== '/') {
      prefixedTo = `/dashboard${to}`;
    }
  }
  
  return <OriginalNavLink to={prefixedTo} {...props} />;
};


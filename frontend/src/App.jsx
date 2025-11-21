import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./auth/Login";
import AdminApp from "./AdminApp";
import PublicApp from "./PublicApp";

// Component to handle root route intelligently
const RootRedirect = () => {
  const wasInAdmin = sessionStorage.getItem('wasInAdmin') === 'true';
  return <Navigate to={wasInAdmin ? "/dashboard" : "/login"} replace />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<AdminApp />} />
        <Route path="/site/*" element={<PublicApp />} />
        
        {/* Redirect admin routes to /dashboard prefix */}
        <Route path="/brand" element={<Navigate to="/dashboard/brand" replace />} />
        <Route path="/customize" element={<Navigate to="/dashboard/customize" replace />} />
        <Route path="/products" element={<Navigate to="/dashboard/products" replace />} />
        <Route path="/highlights" element={<Navigate to="/dashboard/highlights" replace />} />
        <Route path="/social" element={<Navigate to="/dashboard/social" replace />} />
        <Route path="/theme" element={<Navigate to="/dashboard/theme" replace />} />
        <Route path="/analytics" element={<Navigate to="/dashboard/analytics" replace />} />
        
        <Route path="/" element={<RootRedirect />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

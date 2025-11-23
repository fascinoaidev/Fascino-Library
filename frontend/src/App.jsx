import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./auth/Login";
import AdminApp from "./AdminApp";
import PublicApp from "./PublicApp";
import LandingApp from "./LandingApp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<AdminApp />} />
        <Route path="/site/*" element={<PublicApp />} />
        
        {/* Landing pages */}
        <Route path="/" element={<LandingApp />} />
        <Route path="/pricing" element={<LandingApp />} />
        <Route path="/how-it-works" element={<LandingApp />} />
        <Route path="/about" element={<LandingApp />} />
        
        {/* Redirect admin routes to /dashboard prefix */}
        <Route path="/brand" element={<Navigate to="/dashboard/brand" replace />} />
        <Route path="/customize" element={<Navigate to="/dashboard/customize" replace />} />
        <Route path="/products" element={<Navigate to="/dashboard/products" replace />} />
        <Route path="/highlights" element={<Navigate to="/dashboard/highlights" replace />} />
        <Route path="/social" element={<Navigate to="/dashboard/social" replace />} />
        <Route path="/theme" element={<Navigate to="/dashboard/theme" replace />} />
        <Route path="/analytics" element={<Navigate to="/dashboard/analytics" replace />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

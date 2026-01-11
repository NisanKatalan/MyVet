import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PatientProfile from './pages/PatientProfile';

// כאן אנחנו מגדירים את הניווט של כל האפליקציה
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* דף הבית מפנה אוטומטית ללוגין */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* הגדרת הנתיבים */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patient/:id" element={<PatientProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
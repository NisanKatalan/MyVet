import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PatientProfile from './pages/PatientProfile';
import Navbar from './Navbar.jsx'; 
import Appointments from './pages/Appointments.jsx';  


function App() {
  return (
    <BrowserRouter>
      <Navbar />  {/* <--- האם השורה הזו קיימת מעל ה-Routes? */}
      
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/patient/:id" element={<PatientProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
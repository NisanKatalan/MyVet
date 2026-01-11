import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Pets } from '@mui/icons-material';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // בדיקה אם אנחנו בדף כניסה - אם כן, לא מחזירים כלום (null)
  if (location.pathname === '/login' || location.pathname === '/') {
    return null;
  }

  // פונקציה לטיפול ביציאה מהמערכת
  const handleLogout = () => {
    // כאן בעתיד נוסיף: localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    // הוספתי dir="rtl" כדי לתמוך בעברית בצורה נכונה
    <Box dir="rtl" sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="static">
        <Toolbar>
          {/* צד ימין: לוגו ושם המערכת */}
          <Pets sx={{ ml: 2 }} /> {/* החלפתי ל-ml (margin-left) שיתאים לעברית */}
          
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 'bold' }} 
            onClick={() => navigate('/dashboard')}
          >
            MyVet
          </Typography>

          {/* צד שמאל: כפתורי ניווט */}
          <Box>
            <Button color="inherit" onClick={() => navigate('/dashboard')}>
              יומן תורים
            </Button>
            
            <Button color="error" variant="contained" sx={{ mr: 2 }} onClick={handleLogout}>
              יציאה
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Pets } from '@mui/icons-material';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // בדיקה אם אנחנו בדף כניסה - אם כן, לא מחזירים כלום
  if (location.pathname === '/login' || location.pathname === '/') {
    return null;
  }

  // פונקציה לטיפול ביציאה מהמערכת
  const handleLogout = () => {
    // כאן בעתיד: localStorage.removeItem('token');
    navigate('/login');
  };

  // פונקציית עזר לבדיקת הכפתור הפעיל
  // אם הנתיב הנוכחי (location.pathname) שווה לנתיב של הכפתור, נחזיר גבול תחתון לבן
  const isActive = (path) => {
    return location.pathname === path ? '3px solid #ffffff' : '3px solid transparent';
  };

  return (
    <Box dir="rtl" sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="static">
        <Toolbar>
          
          {/* --- צד ימין: לוגו --- */}
          <Box 
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', flexGrow: 1 }}
            onClick={() => navigate('/dashboard')}
          >
            <Pets sx={{ ml: 1 }} />
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              MyVet
            </Typography>
          </Box>

          {/* --- צד שמאל: תפריט ניווט --- */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            
            {/* כפתור ראשי / דשבורד */}
            <Button 
              color="inherit" 
              onClick={() => navigate('/dashboard')}
              sx={{ 
                borderRadius: 0, // כדי שהקו למטה יהיה ישר
                borderBottom: isActive('/dashboard'),
                '&:hover': { borderBottom: '3px solid #e0e0e0' } // אפקט מעבר עכבר
              }}
            >
              ראשי
            </Button>

            {/* כפתור יומן תורים */}
            <Button 
              color="inherit" 
              onClick={() => navigate('/appointments')}
              sx={{ 
                borderRadius: 0,
                borderBottom: isActive('/appointments'),
                '&:hover': { borderBottom: '3px solid #e0e0e0' }
              }}
            >
              יומן תורים
            </Button>
            
            {/* כפתור יציאה (מופרד קצת ועם צבע שונה) */}
            <Button 
              color="error" 
              variant="contained" 
              onClick={handleLogout}
              sx={{ mr: 2, fontWeight: 'bold' }} // mr = margin right (בגלל ה-RTL זה מרחיק משמאל)
            >
              יציאה
            </Button>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
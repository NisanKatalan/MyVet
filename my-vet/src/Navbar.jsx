import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Pets } from '@mui/icons-material';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // אנחנו לא רוצים להציג את הסרגל במסך הכניסה
  if (location.pathname === '/login' || location.pathname === '/') {
    return null;
  }

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        {/* לוגו ואייקון בצד ימין */}
        <Pets sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>
          MyVet
        </Typography>

        {/* כפתורים בצד שמאל */}
        <Box>
          <Button color="inherit" onClick={() => navigate('/dashboard')}>יומן תורים</Button>
          <Button color="error" onClick={() => navigate('/login')}>יציאה</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
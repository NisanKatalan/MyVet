import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Button, 
  Container, 
  TextField, 
  Typography, 
  Paper,
  Alert 
} from '@mui/material';
import { Pets } from '@mui/icons-material';

const Login = () => {
  const navigate = useNavigate();
  
  // ניהול State עבור השדות והשגיאות
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // מונע רענון של הדף

    // בדיקה "כאילו" אמיתית - בהמשך נחבר לשרת
    if (email === 'admin@vet.com' && password === '123456') {
      console.log('התחברות בוצעה בהצלחה!');
      navigate('/dashboard'); // מעבר ללוח הבקרה
    } else {
      setError(true); // הצגת הודעת שגיאה
    }
  };

  return (
    // Box חיצוני שממרכז הכל לאמצע המסך
    <Box 
      sx={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#f5f5f5' // צבע רקע אפור עדין
      }}
    >
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* אייקון וכותרת */}
          <Box sx={{ mb: 3, textAlign: 'center' }}>
            <Pets color="primary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography component="h1" variant="h5">
              כניסה למערכת MyVet
            </Typography>
          </Box>

          {/* טופס הכניסה */}
          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            
            {/* הצגת שגיאה אם יש */}
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                שם משתמש או סיסמה שגויים (נסה: admin@vet.com / 123456)
              </Alert>
            )}

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="כתובת אימייל"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(false); }}
              dir="rtl" // חשוב עבור הקלדה בעברית/אנגלית מעורב
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="סיסמה"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              dir="rtl"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 1.5, fontSize: '1.1rem' }}
            >
              התחבר
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
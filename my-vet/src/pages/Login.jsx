import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: '#f5f5f5' }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>MyVet כניסה למערכת</Typography>
        <Button variant="contained" size="large" onClick={() => navigate('/dashboard')}>
          כניסה (דמו)
        </Button>
      </Paper>
    </Box>
  );
}
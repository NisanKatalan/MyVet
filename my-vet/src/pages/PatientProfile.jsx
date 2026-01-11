import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

export default function PatientProfile() {
  const { id } = useParams(); // לוקח את המספר מהכתובת למעלה
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 4 }}>
      <Button variant="outlined" onClick={() => navigate('/dashboard')} sx={{ mb: 2 }}>
        חזרה ליומן
      </Button>
      <Typography variant="h4">תיק רפואי - חיה מספר {id}</Typography>
      <Typography>כאן יוצגו הפרטים, ההיסטוריה והחיסונים.</Typography>
    </Container>
  );
}
import React from 'react';
import { Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>יומן תורים ולוח בקרה</Typography>
      <Typography paragraph>כאן יופיע יומן התורים ורשימת המטופלים להיום.</Typography>
      
      {/* קישור זמני לבדיקה */}
      <Link to="/patient/101">מעבר לתיק רפואי לדוגמה (רקס)</Link>
    </Container>
  );
}
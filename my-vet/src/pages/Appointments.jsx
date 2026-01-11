import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function Appointments() {
  return (
    <Container>
      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h4">יומן תורים מלא</Typography>
        <Typography variant="subtitle1">כאן יופיע לוח השנה המלא לניהול התורים...</Typography>
      </Box>
    </Container>
  );
}
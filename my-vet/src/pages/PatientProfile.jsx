import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Container, Paper, Typography, Grid, Box, Avatar, 
  Chip, Divider, List, ListItem, ListItemText, Button, Alert 
} from '@mui/material';
import { ArrowForward, Phone, Email, MedicalServices, Warning } from '@mui/icons-material';

// ייבוא הנתונים
import { pets, owners, visits } from '../mocks/data';

export default function PatientProfile() {
  const { id } = useParams(); // מקבל את המספר מהכתובת (למשל 101)
  const navigate = useNavigate();

  // --- Logic Layer: שליפת הנתונים המתאימים ---
  
  // 1. מציאת החיה הספציפית (חייבים להמיר למספר כי בכתובת זה טקסט)
  const pet = pets.find(p => p.id === parseInt(id));

  // 2. אם לא מצאנו חיה (למשל מישהו הקיש כתובת שגויה)
  if (!pet) {
    return <Container><Typography variant="h5">התיק לא נמצא</Typography></Container>;
  }

  // 3. מציאת הבעלים של החיה
  const owner = owners.find(o => o.id === pet.ownerId);

  // 4. שליפת כל הביקורים הקודמים רק של החיה הזו
  const petHistory = visits.filter(v => v.petId === pet.id);

  // --- UI Layer: התצוגה ---

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* כפתור חזרה */}
      <Button startIcon={<ArrowForward />} onClick={() => navigate('/dashboard')} sx={{ mb: 2 }}>
        חזרה ליומן
      </Button>

      <Grid container spacing={3}>
        {/* צד ימין: פרטים אישיים והתראות */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
            <Avatar 
              src={pet.image} 
              sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }} 
            />
            <Typography variant="h4" gutterBottom>{pet.name}</Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {pet.type} | {pet.breed} | בן {pet.age}
            </Typography>

            <Divider sx={{ my: 2 }} />

            {/* אזור התראות רפואיות (חלק מדרישות הייזום) */}
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <Warning color="error" sx={{ ml: 1 }} /> רגישויות ומחלות
              </Typography>
              
              {pet.chronicConditions.length > 0 ? (
                pet.chronicConditions.map((condition, index) => (
                  <Chip key={index} label={condition} color="error" variant="outlined" sx={{ m: 0.5 }} />
                ))
              ) : (
                <Typography variant="body2" color="text.secondary">אין רגישויות ידועות</Typography>
              )}
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* פרטי בעלים */}
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="h6" gutterBottom>פרטי בעלים</Typography>
              <Typography variant="subtitle1"><strong>{owner.name}</strong></Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Phone fontSize="small" sx={{ ml: 1, color: 'text.secondary' }} />
                <Typography variant="body2">{owner.phone}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Email fontSize="small" sx={{ ml: 1, color: 'text.secondary' }} />
                <Typography variant="body2">{owner.email}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* צד שמאל: היסטוריה רפואית */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ borderBottom: 1, borderColor: 'divider', pb: 1 }}>
              היסטוריה רפואית
            </Typography>

            {petHistory.length === 0 ? (
              <Alert severity="info" sx={{ mt: 2 }}>אין היסטוריה רפואית מתועדת במערכת זו.</Alert>
            ) : (
              <List>
                {petHistory.map((visit) => (
                  <React.Fragment key={visit.id}>
                    <ListItem alignItems="flex-start">
                      <Box sx={{ mr: 2, mt: 1 }}>
                        <MedicalServices color="primary" />
                      </Box>
                      <ListItemText
                        primary={
                          <Typography variant="h6">
                            {visit.reason} - <span style={{ fontSize: '0.9em', color: 'gray' }}>{visit.date}</span>
                          </Typography>
                        }
                        secondary={
                          <Box component="span">
                            <Typography component="span" variant="body2" color="text.primary" display="block">
                              אבחנה: {visit.diagnosis}
                            </Typography>
                            <Typography component="span" variant="caption" color="text.secondary">
                              טופל ע״י: {visit.vetName}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    <Divider component="li" />
                  </React.Fragment>
                ))}
              </List>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
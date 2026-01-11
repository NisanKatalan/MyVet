import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Chip, 
  Avatar, 
  Box 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AccessTime, Person, Pets } from '@mui/icons-material';

// 1. ייבוא הנתונים המזויפים שיצרנו
import { visits, pets, owners } from '../mocks/data';

export default function Dashboard() {
  const navigate = useNavigate();

  // 2. לוגיקה: פונקציה שמחברת את כל המידע (Join)
  // הביקור מכיל רק מזהה חיה (petId). אנחנו צריכים למצוא את החיה והבעלים המלאים.
  const getFullVisitDetails = (visit) => {
    const pet = pets.find(p => p.id === visit.petId);
    const owner = owners.find(o => o.id === pet.ownerId);
    return { ...visit, pet, owner };
  };

  // יצירת רשימה מלאה של ביקורים עם כל הפרטים
  const appointments = visits.map(getFullVisitDetails);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        👋 שלום, ד״ר כהן
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        יש לך {appointments.length} תורים מתוכננים להיום
      </Typography>

      {/* רשת (Grid) של כרטיסים */}
      <Grid container spacing={3}>
        {appointments.map((visit) => (
          <Grid item xs={12} md={6} lg={4} key={visit.id}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                
                {/* כותרת הכרטיס: פרטי החיה */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar 
                    src={visit.pet.image} 
                    alt={visit.pet.name} 
                    sx={{ width: 56, height: 56, mr: 2 }} 
                  />
                  <Box>
                    <Typography variant="h6">{visit.pet.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {visit.pet.type} ({visit.pet.breed})
                    </Typography>
                  </Box>
                </Box>

                {/* פרטי הביקור */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <AccessTime fontSize="small" color="action" sx={{ mr: 1 }} />
                  <Typography variant="body2">{visit.date}</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Person fontSize="small" color="action" sx={{ mr: 1 }} />
                  <Typography variant="body2">{visit.owner.name}</Typography>
                </Box>

                <Chip 
                  label={visit.reason} 
                  color="primary" 
                  variant="outlined" 
                  size="small" 
                  sx={{ width: '100%' }}
                />
              </CardContent>
              
              <CardActions>
                <Button 
                  size="small" 
                  variant="contained" 
                  fullWidth 
                  onClick={() => navigate(`/patient/${visit.pet.id}`)}
                >
                  פתח תיק רפואי
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
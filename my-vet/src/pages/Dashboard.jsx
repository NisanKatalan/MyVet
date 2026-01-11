import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Paper, 
  Typography, 
  Card, 
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip // רכיב להצגת "תגיות" קטנות
} from '@mui/material';
import { CalendarToday, Pets, Warning } from '@mui/icons-material';

// --- 1. נתוני דמה (Mock Data) ---
// בעולם האמיתי הנתונים האלו יגיעו מהשרת (API)
const stats = [
  { title: 'תורים להיום', value: 12, icon: <CalendarToday />, color: '#1976d2' },
  { title: 'מטופלים פעילים', value: 85, icon: <Pets />, color: '#2e7d32' },
  { title: 'מקרים דחופים', value: 3, icon: <Warning />, color: '#ed6c02' },
];

const appointments = [
  { id: 1, time: '09:00', owner: 'ישראל ישראלי', pet: 'רקס', type: 'חיסון', status: 'pending' },
  { id: 2, time: '09:30', owner: 'מיכל כהן', pet: 'מיצי', type: 'ביקורת', status: 'completed' },
  { id: 3, time: '10:15', owner: 'דני לוי', pet: 'בובי', type: 'ניתוח', status: 'urgent' },
  { id: 4, time: '11:00', owner: 'רונית שחר', pet: 'לונה', type: 'בדיקה כללית', status: 'pending' },
];

export default function Dashboard() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      
      {/* כותרת הדף */}
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        לוח בקרה - מרפאת VetConnect
      </Typography>

      {/* --- חלק עליון: כרטיסי סטטיסטיקה --- */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          // Grid Item: במסך קטן תופס הכל (12), במסך בינוני שליש (4)
          <Grid item xs={12} md={4} key={index}>
            <Card elevation={2}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    {stat.title}
                  </Typography>
                  <Typography variant="h4">
                    {stat.value}
                  </Typography>
                </Box>
                {/* האייקון בצבע המותאם */}
                <Box sx={{ color: stat.color, transform: 'scale(1.5)', mr: 2 }}>
                  {stat.icon}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* --- חלק תחתון: טבלת תורים --- */}
      <Paper elevation={2} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ mb: 2, p: 1 }}>
          תורים קרובים להיום
        </Typography>
        
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
              <TableRow>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>שעה</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>שם הבעלים</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>שם החיה</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>סוג טיפול</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>סטטוס</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell align="right">{row.time}</TableCell>
                  <TableCell align="right">{row.owner}</TableCell>
                  <TableCell align="right">{row.pet}</TableCell>
                  <TableCell align="right">{row.type}</TableCell>
                  <TableCell align="center">
                    {/* תגית צבעונית לפי סטטוס */}
                    <Chip 
                      label={row.status === 'urgent' ? 'דחוף' : row.status === 'completed' ? 'הושלם' : 'ממתין'} 
                      color={row.status === 'urgent' ? 'error' : row.status === 'completed' ? 'success' : 'default'}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}

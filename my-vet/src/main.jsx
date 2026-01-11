import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// יצירת ערכת נושא בסיסית (אפשר לשנות צבעים כאן בעתיד)
const theme = createTheme({
  palette: {
    background: {
      default: "#f4f6f8" // צבע רקע אפור בהיר-מקצועי לכל האפליקציה
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* זה הרכיב שמסדר את העיצוב הבסיסי */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)